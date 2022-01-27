import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6ihfYDp-EoF1U76vXPRr7CAkg1TsDRco",
    authDomain: "casino-d11a4.firebaseapp.com",
    projectId: "casino-d11a4",
    storageBucket: "casino-d11a4.appspot.com",
    messagingSenderId: "1712249390",
    appId: "1:1712249390:web:bac9b0785cceb2a2105dbf"
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
