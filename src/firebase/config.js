import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAUHYVjr3DlVMapzpvmvNR99eJsRjiEA1o",
  authDomain: "actividad-10.firebaseapp.com",
  databaseURL: "https://actividad-10-default-rtdb.firebaseio.com",
  projectId: "actividad-10",
  storageBucket: "actividad-10.appspot.com",
  messagingSenderId: "940387364630",
  appId: "1:940387364630:web:8eb453ac117180124a6a37"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
