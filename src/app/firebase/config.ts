// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBtu3aaZxL_Fj-wMUC3FOZyLxyjdzscAtQ',
    authDomain: 'home-bills-d214c.firebaseapp.com',
    projectId: 'home-bills-d214c',
    storageBucket: 'home-bills-d214c.firebasestorage.app',
    messagingSenderId: '94772951131',
    appId: '1:94772951131:web:47e74798b9efec78df677e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
