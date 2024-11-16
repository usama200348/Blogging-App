import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlh7r0GQCrlDa4ES-cVKO7cNmRr45TAU0",
  authDomain: "blogging-app-3f2f4.firebaseapp.com",
  projectId: "blogging-app-3f2f4",
  storageBucket: "blogging-app-3f2f4.firebasestorage.app",
  messagingSenderId: "104764811268",
  appId: "1:104764811268:web:7cb21a46f0066360da2d51",
  measurementId: "G-N0MS8THNPY"
};

const app = initializeApp(firebaseConfig);
export default app