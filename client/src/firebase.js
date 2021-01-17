import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
      apiKey: " AIzaSyCPBQOoHU38VXcW7LFSoGT-IrrHwxiil48 ",
      projectId: "sbhacks2021-301902",
      authDomain: "sbhacks2021-301902.firebaseapp.com",
      databaseURL: "https://sbhacks2021-301902.firebaseio.com",
      storageBucket: "sbhacks2021-301902.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();