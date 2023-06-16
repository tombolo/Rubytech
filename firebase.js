import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHgN1ZjtZbCzpxVzlgPuXPyiN108q2vq0",
  authDomain: "rubytech-organization.firebaseapp.com",
  projectId: "rubytech-organization",
  storageBucket: "rubytech-organization.appspot.com",
  messagingSenderId: "200795447521",
  appId: "1:200795447521:web:98f1a59fdaa36b38e957a0",
  measurementId: "G-8RQD7BYLEF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

