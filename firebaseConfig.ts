// firebaseConfig.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
interface FirebaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
}

const firebaseConfig: FirebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
