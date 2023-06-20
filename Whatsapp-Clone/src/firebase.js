import { initializeApp } from 'firebase/app';
import {getAuth , onAuthStateChanged} from 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =  {
    apiKey: "AIzaSyA08JPSYiHGlq2mLuHcCD6NtxzZml8QSbw",
    authDomain: "whatapp-b24a6.firebaseapp.com",
    projectId: "whatapp-b24a6",
    storageBucket: "whatapp-b24a6.appspot.com",
    messagingSenderId: "33554171497",
    appId: "1:33554171497:web:b47094d289f74c81a284f8",
    measurementId: "G-81SYKWG24G"
  };

   const auth = getAuth();
   const firebaseApp = initializeApp(firebaseConfig)
   const db = firebaseApp.getFirestore();
  
onAuthStateChanged(auth , user => {
  if (user !=  null) {
    console.log("Login Successful")
  } else {
    console.log('No User!')
  } 

});


  export default db;

