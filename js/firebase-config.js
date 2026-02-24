// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-cKFQDygLBJ1iRE6hLv65p2pDNU2Tzoo",
  authDomain: "arctic-cursor-473623-f4.firebaseapp.com",
  databaseURL: "https://arctic-cursor-473623-f4-default-rtdb.firebaseio.com",
  projectId: "arctic-cursor-473623-f4",
  storageBucket: "arctic-cursor-473623-f4.firebasestorage.app",
  messagingSenderId: "374023703769",
  appId: "1:374023703769:web:f844f68036f14ef39a82c8",
  measurementId: "G-J5ZFM9Y5SF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();
