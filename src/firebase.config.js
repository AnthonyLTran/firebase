import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyB0fKY6aPZGAz98HcHJbVgQCP0l9ZMu3Hc",
  authDomain: "fir-project-b80ea.firebaseapp.com",
  projectId: "fir-project-b80ea",
  storageBucket: "fir-project-b80ea.appspot.com",
  messagingSenderId: "218664923918",
  appId: "1:218664923918:web:ed2ce421006607353e1d5f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }