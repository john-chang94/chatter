import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1lh_0-BhIBmdezk2sEdAed_ClXfXhX6A",
  authDomain: "chatter-4933a.firebaseapp.com",
  projectId: "chatter-4933a",
  storageBucket: "chatter-4933a.appspot.com",
  messagingSenderId: "974194055178",
  appId: "1:974194055178:web:9b988fb99adc398fa8e7f3",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
