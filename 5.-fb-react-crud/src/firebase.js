import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRU4Z0t5PB1ebBJJASBS2bLuVk_wlHJc0",
    authDomain: "fb-crud-react-a8d10.firebaseapp.com",
    databaseURL: "https://fb-crud-react-a8d10.firebaseio.com",
    projectId: "fb-crud-react-a8d10",
    storageBucket: "fb-crud-react-a8d10.appspot.com",
    messagingSenderId: "272026717516",
    appId: "1:272026717516:web:7766825c56c7a48ae213e9"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();