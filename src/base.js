import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4GD3tQAjQ4lI8aKwrdse74vSrvD5SD04",
    authDomain: "catch-of-the-day-jesse-woo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jesse-woo.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;