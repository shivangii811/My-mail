import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from "firebase/auth"; 
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA16zWDOXnzpnzCc07rI1WNqGsINaaW1j8",
  authDomain: "clone-with-reactjs-971b9.firebaseapp.com",
  projectId: "clone-with-reactjs-971b9",
  storageBucket: "clone-with-reactjs-971b9.firebasestorage.app",
  messagingSenderId: "290274994697",
  appId: "1:290274994697:web:901c866ffd772986f7e6d8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const querySnapshot = await getDocs(collection(db, "your-collection-name"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

export {db , auth, provider}