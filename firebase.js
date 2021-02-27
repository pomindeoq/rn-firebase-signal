import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsuY9R7K3ZS5uvfRrGyEJg4h6XCm-roxQ",
  authDomain: "rn-signal.firebaseapp.com",
  projectId: "rn-signal",
  storageBucket: "rn-signal.appspot.com",
  messagingSenderId: "542725338232",
  appId: "1:542725338232:web:8fe113a1be15a22feae98d",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
