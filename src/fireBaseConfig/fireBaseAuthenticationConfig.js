import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBzPthO2oQFuEDjMXYcrxrpO-cScPKlzWc',
  authDomain: 'fundooapp-5f1ac.firebaseapp.com',
  databaseURL: 'https://fundooapp-5f1ac.firebaseio.com',
  projectId: 'fundooapp-5f1ac',
  storageBucket: 'fundooapp-5f1ac.appspot.com',
  messagingSenderId: '954751924626',
  appId: '1:954751924626:web:6ea0ef2b7cbf6397b1a94b',
};
// const Firebase = firebase.initializeApp(firebaseConfig);
// export let Dbase = firebase.firestore(Firebase);
//let dbase = firebase.database();
firebase.initializeApp(firebaseConfig);
const dbase = firebase.database();
const dbStorage = firebase.storage();
export default {dbase, firebase, dbStorage};
