import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import Firebase from "firebase";


var config = {
    apiKey: "AIzaSyBjbDMM3GWZUc7M66XGII0z8n8C0hl29eU",
    authDomain: "brew-bin.firebaseapp.com",
    databaseURL: "https://brew-bin.firebaseio.com",
    projectId: "brew-bin",
    storageBucket: "brew-bin.appspot.com",
    messagingSenderId: "210828115949"

};
Firebase.initializeApp(config);
var provider = new Firebase.auth.GoogleAuthProvider();

Firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("User logged in: " + JSON.stringify(user));
    } else {
        Firebase.auth().signInWithRedirect(provider);
    }
});


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();


