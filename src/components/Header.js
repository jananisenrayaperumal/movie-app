import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO } from "../utils/constant";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector(store => store.user);

	const handleSignout = () => {
		signOut(auth).then(() => {}).catch(error => {
			navigate("/error");
		});
	};

	useEffect(
		() => {
			console.log("Lisener called");
			const unsubscribe = onAuthStateChanged(auth, user => {
				if (user) {
					const { uid, email, displayName, photoURL } = user;
					dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
					navigate("/browse");
				} else {
					// User is signed out
					dispatch(removeUser());
					navigate("/");
				}
			});

			return () => unsubscribe();
		},
		[dispatch, navigate]
	);

	return (
		<div className="absolute w-full px-8 bg-gradient-to-b from-black z-10 flex justify-between items-center">
			<img className="w-48" src={APP_LOGO} alt="logo" />
			{user &&
				<div className="flex items-center gap-2">
					<img alt={"user-img"} src={user.photoURL} className="w-12 " />
					<button className="text-white font-medium " onClick={handleSignout}>
						Signout
					</button>
				</div>}
		</div>
	);
};

export default Header;
