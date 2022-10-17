import firebase from 'firebase/app';
import "firebase/auth";


export const auth =firebase.initializeApp( {

  apiKey: "AIzaSyAt_6M4hxLJHgaryut2uqPHNiXnMmYtP30",

  authDomain: "chatmax-16c00.firebaseapp.com",

  projectId: "chatmax-16c00",

  storageBucket: "chatmax-16c00.appspot.com",

  messagingSenderId: "759238934729",

  appId: "1:759238934729:web:d420fb398eb5703a24cd18"

}).auth();