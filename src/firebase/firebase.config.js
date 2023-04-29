// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDufhfFhAvWzXQUjmqA_ZZjTMspJTKM5wI",
  authDomain: "ema-john-simple-firebase-7ecfc.firebaseapp.com",
  projectId: "ema-john-simple-firebase-7ecfc",
  storageBucket: "ema-john-simple-firebase-7ecfc.appspot.com",
  messagingSenderId: "112425114142",
  appId: "1:112425114142:web:42799670dc22fa020cac0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;