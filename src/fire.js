import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCz6GqyRURhxrYRkG7fZEqb23L0ur62U50",
    authDomain: "ecommerce-react-dcc39.firebaseapp.com",
    databaseURL: "https://ecommerce-react-dcc39-default-rtdb.firebaseio.com",
    projectId: "ecommerce-react-dcc39",
    storageBucket: "ecommerce-react-dcc39.appspot.com",
    messagingSenderId: "433333009294",
    appId: "1:433333009294:web:979f8da4df0543801782df",
    measurementId: "G-P81X4GRRLE"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default fire;