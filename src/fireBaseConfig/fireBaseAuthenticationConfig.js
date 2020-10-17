import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCk58uzRSbo_OnTsVOm7dYerV0JWf3gDaY',
  authDomain: 'fundoonotes-25669.firebaseapp.com',
  databaseURL: 'https://fundoonotes-25669.firebaseio.com',
  projectId: 'fundoonotes-25669',
  storageBucket: 'fundoonotes-25669.appspot.com',
  messagingSenderId: '1038530122638',
  appId: '1:1038530122638:web:5261176e92968742570adf',
};
const Firebase = firebase.initializeApp(firebaseConfig);
export let Dbase = firebase.firestore(Firebase);
//let dbase = firebase.database();
