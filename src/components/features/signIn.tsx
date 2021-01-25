import React from "react";
import firebase from "gatsby-plugin-firebase";

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
