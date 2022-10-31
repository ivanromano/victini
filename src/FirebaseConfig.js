// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtfTOyQJSiemlsynrUuKiXA0meu8QycnQ",
  authDomain: "vue-parte-3.firebaseapp.com",
  projectId: "vue-parte-3",
  storageBucket: "vue-parte-3.appspot.com",
  messagingSenderId: "392187003169",
  appId: "1:392187003169:web:c234828bf6f09f75fe3e60"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export {auth}
