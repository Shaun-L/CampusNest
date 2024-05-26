// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4jQ3Ts7160PqHX3xy-UOHxAWwb0Lm5eo",
  authDomain: "venushacks2024-82733.firebaseapp.com",
  projectId: "venushacks2024-82733",
  storageBucket: "venushacks2024-82733.appspot.com",
  messagingSenderId: "857445499678",
  appId: "1:857445499678:web:ced8205d8a1ef9a7c83f0f",
  measurementId: "G-LVBJFDE7KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)
export const storage = getStorage(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


//var citiesRef = db.collection("testing");
// curse_needed.value()



//console.log("Document written with ID: ", citiesRef);