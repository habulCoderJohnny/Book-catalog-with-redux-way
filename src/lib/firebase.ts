/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDj5rnzylFza8SyMcsXJg5iQfNtVqInww",
  authDomain: "boinamadotcom.firebaseapp.com",
  projectId: "boinamadotcom",
  storageBucket: "boinamadotcom.appspot.com",
  messagingSenderId: "345388133135",
  appId: "1:345388133135:web:420e01c4cb21ee0f042c7a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
