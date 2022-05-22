
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC56jjJXYxCSqSww9j9RX-eR5P8M1a0HSg",
  authDomain: "grandauto-da398.firebaseapp.com",
  projectId: "grandauto-da398",
  storageBucket: "grandauto-da398.appspot.com",
  messagingSenderId: "613211283893",
  appId: "1:613211283893:web:26838c42708e599eac79fc"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth