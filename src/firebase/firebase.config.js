// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD231cXTd4-AQtN_B30YFCoNUPestKwUnY",
  authDomain: "weddings-event-mannagement.firebaseapp.com",
  projectId: "weddings-event-mannagement",
  storageBucket: "weddings-event-mannagement.appspot.com",
  messagingSenderId: "279932669951",
  appId: "1:279932669951:web:021887bfccef299cf8e1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;