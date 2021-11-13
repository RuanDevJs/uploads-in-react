import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCGxeaAP3-UTvZ64iJOIO2gjv8tt0wVUHs",
    authDomain: "upload-project-e8132.firebaseapp.com",
    projectId: "upload-project-e8132",
    storageBucket: "upload-project-e8132.appspot.com",
    messagingSenderId: "512782459632",
    appId: "1:512782459632:web:4a14d2f38f638521455835"
};

if(firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
