import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAn3v_YXWlg-ttCUPkQ1J7gB-J4vD6h2nE',
  authDomain: 'slack-clone-ab5f2.firebaseapp.com',
  projectId: 'slack-clone-ab5f2',
  storageBucket: 'slack-clone-ab5f2.appspot.com',
  messagingSenderId: '930232536225',
  appId: '1:930232536225:web:aef389be655f10a197b4e0',
};


const firebaseApp = firebase.initializeApp(firebaseConfig) //initilizing the app (connects to the google backend)

//setting up the db

// firebase is a no-sql 
const db = firebaseApp.firestore(); //this is for accessing the database

const auth = firebaseApp.auth(); 

//this is for the provider for the google authentication (popup)
const provider = new firebase.auth.GoogleAuthProvider();


// exporting the different elements to have access to them from anywhere
export {db, auth, provider};
