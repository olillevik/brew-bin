import firebase, { default as Firebase } from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBjbDMM3GWZUc7M66XGII0z8n8C0hl29eU",
  authDomain: "brew-bin.firebaseapp.com",
  databaseURL: "https://brew-bin.firebaseio.com",
  projectId: "brew-bin",
  storageBucket: "brew-bin.appspot.com",
  messagingSenderId: "210828115949"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const fire = {
  signIn: () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User logged in: " + JSON.stringify(user));
      } else {
        firebase
          .auth()
          .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      }
    });
  },
  user: () => Firebase.auth().currentUser.uid,
  store: () => firebase.firestore(),
  signOut: () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  }
};

export default fire;
