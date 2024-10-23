// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAdmELqXhRi_LkOkXFOey-LMMhlKGmmJHk",
	authDomain: "netflixgpt-25047.firebaseapp.com",
	projectId: "netflixgpt-25047",
	storageBucket: "netflixgpt-25047.appspot.com",
	messagingSenderId: "228952631532",
	appId: "1:228952631532:web:1dee04875d79d94f2eddc9",
	measurementId: "G-NNFBSL8YHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
