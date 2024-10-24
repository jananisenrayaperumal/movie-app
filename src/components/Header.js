import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector(store => store.user);

	const handleSignout = () => {
		signOut(auth)
			.then(() => {
				dispatch(removeUser());
				navigate("/");
			})
			.catch(error => {
				navigate("/error");
			});
	};

	return (
		<div className="absolute w-full px-8 bg-gradient-to-b from-black z-10 flex justify-between items-center">
			<img
				className="w-48"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>
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
