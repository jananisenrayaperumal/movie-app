export const checkValidate = (name, email, password) => {
	const isNameValid = /^[a-z ,.'-]+$/i.test(name);
	const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!isEmailValid) return "Email ID is not valid";
	if (!isPasswordValid) return "Passowrd is not valid";
	if (!isNameValid) return "Provide a valid name";

	return null;
};
