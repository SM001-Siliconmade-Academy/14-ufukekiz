import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkDFRYtcpBtEIS1h02JXll7ewqYlqueuM",
  authDomain: "siliconmade-gorev13.firebaseapp.com",
  projectId: "siliconmade-gorev13",
  storageBucket: "siliconmade-gorev13.appspot.com",
  messagingSenderId: "116277400082",
  appId: "1:116277400082:web:be9ea47de24f224151becb",
  measurementId: "G-8747JMFBJR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, auth, db,storage};


