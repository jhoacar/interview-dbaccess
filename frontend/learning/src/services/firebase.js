import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// }
const firebaseConfig = {
  apiKey: "AIzaSyCglRW0VPGTJXng3aeEYv3AKQu0mjGrVAc",
  authDomain: "alcaldia-fbcce.firebaseapp.com",
  projectId: "alcaldia-fbcce",
  storageBucket: "alcaldia-fbcce.appspot.com",
  messagingSenderId: "935799809719",
  appId: "1:935799809719:web:9a26b65b0c05a658520f32",
  measurementId: "G-Y4VJBQFL5J"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const providers = new GoogleAuthProvider();

export { app, auth, providers, signInWithRedirect, getRedirectResult, GoogleAuthProvider };