import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDB6fYQXk6b1MnxxqRNiQw6xp1hgsbwstg",
  authDomain: "nannyservicewebsite.firebaseapp.com",
  databaseURL:
    "https://nannyservicewebsite-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "nannyservicewebsite",
  storageBucket: "nannyservicewebsite.appspot.com",
  messagingSenderId: "861158099200",
  appId: "1:861158099200:web:fa566981bf3e4a5e5e8be5",
  measurementId: "G-JM10Y103L0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
