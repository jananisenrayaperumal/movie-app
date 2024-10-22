import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const handleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div className="relative min-h-screen">
			<Header />
			<img
				src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/CA-en-20241014-TRIFECTA-perspective_e4bd7558-9ce3-4046-a01b-01301e3fc24c_medium.jpg"
				alt="bg"
				className="absolute object-fill"
			/>
			<form className="w-3/12 text-white p-8 m-4 rounded-lg flex flex-col justify-center absolute top-44 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90">
				<h2 className="p-2 my-4 text-2xl">
					{isSignInForm ? "Sign in" : "Sign up"}
				</h2>
				{isSignInForm &&
					<input
						className="p-4 my-2 rounded w-full bg-transparent border border-gray-500 focus:border focus:border-gray-500 focus:outline-none"
						type="text"
						placeholder="Email"
					/>}
				<input
					className="p-4 my-2 rounded w-full bg-transparent border border-gray-500 focus:border focus:border-gray-500 focus:outline-none"
					type="text"
					placeholder="Email"
				/>
				<input
					className="p-4 my-2 border rounded w-full border-gray-600 bg-transparent focus:border-gray-500 focus:outline-none"
					type="password"
					placeholder="Password"
				/>
				<button className="p-2 my-4 rounded-lg bg-red-700 text-white w-full">
					{isSignInForm ? "Sign in" : "Sign up"}
				</button>
				<p className="cursor-pointer" onClick={handleSignInForm}>
					{isSignInForm ? "New to Netflix? Sign-up now!" : "Already registered. SignIn Now..."}
				</p>
			</form>
		</div>
	);
};

export default Login;
