import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAMTc95NOURka01R2Gfj8J7VhuwUsFqwLQ",
    authDomain: "reac-tings.firebaseapp.com",
    databaseURL: "https://reac-tings.firebaseio.com",
    projectId: "reac-tings",
    storageBucket: "reac-tings.appspot.com",
    messagingSenderId: "101677343252",
    appId: "1:101677343252:web:6299f0a0118f4230fcfd01",
    measurementId: "G-12KVSP6G7H"
}

firebase.initalizeApp(firebaseConfig);

export default firebase