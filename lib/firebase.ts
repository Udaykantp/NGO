import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-bp1KMJ5nT6rEFSgXpuSj4zM6LdckC9s",
  authDomain: "ngo-e0a34.firebaseapp.com",
  projectId: "ngo-e0a34",
  storageBucket: "ngo-e0a34.firebasestorage.app",
  messagingSenderId: "931096286422",
  appId: "1:931096286422:web:4e17b808d6ab4c47cc6577",
  measurementId: "G-Z56DG20KHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
