import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATHAR, BG_IMAGE } from "../utils/constant";


const Login = () => {
	const dispatch = useDispatch();
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const handleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleBtnClick = () => {
		// Validate form data
		// name && console.log(name?.current?.value);
		// console.log(email);
		// console.log(password.current.value);

		const message = checkValidate(name?.current?.value, email.current.value, password.current.value);
		setErrorMessage(message)

		if (message) return;

		if (!isSignInForm) {
			// Sign up here
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
			.then((userCredential) => {
				updateProfile(auth.currentUser, {
					displayName: name?.current?.value, photoURL: USER_AVATHAR
				}).then(() => {
						const { uid, email, displayName, photoURL } = auth.currentUser;
						dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
					}).catch((error) => {
						setErrorMessage(error.errorMessage);
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMessage(errorCode + "-" + errorMessage)
			});
			
		} else {
			// Sign in here
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
			.then((userCredential) => {
				const user = userCredential.user;
				//console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMessage(errorCode + "-" + errorMessage)
			});

		}
		
	};

	return (
		<div className="relative min-h-screen">
			<Header />
			<img
				src={BG_IMAGE}
				alt="bg"
				className="absolute object-fill"
			/>
			<form
				onSubmit={e => e.preventDefault()}
				className="w-3/12 text-white p-8 m-4 rounded-lg flex flex-col justify-center absolute top-44 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90">
				<h2 className="p-2 my-4 text-2xl">
					{isSignInForm ? "Sign in" : "Sign up"}
				</h2>
				{!isSignInForm &&
					<input
						ref={name}
						className="p-4 my-2 rounded w-full bg-transparent border border-gray-500 focus:border focus:border-gray-500 focus:outline-none"
						type="text"
						placeholder="Name"
					/>}
				<input
					ref={email}
					className="p-4 my-2 rounded w-full bg-transparent border border-gray-500 focus:border focus:border-gray-500 focus:outline-none"
					type="text"
					placeholder="Email"
				/>
				<input
					ref={password}
					className="p-4 my-2 border rounded w-full border-gray-600 bg-transparent focus:border-gray-500 focus:outline-none"
					type="password"
					placeholder="Password"
				/>
				<p className="text-red-600 text-sm">{ errorMessage}</p>
				<button className="p-2 my-4 rounded-lg bg-red-700 text-white w-full" onClick={handleBtnClick}>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="cursor-pointer" onClick={handleSignInForm}>
					{isSignInForm ? "New to Netflix? Sign-up now!" : "Already registered. SignIn Now..."}
				</p>
			</form>
		</div>
	);
};

export default Login;
