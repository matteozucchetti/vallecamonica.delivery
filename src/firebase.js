import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";
const firebaseConfig = {
   apiKey: "AIzaSyAUcoVkVJiO6kwqSD6SRoUhAfYVEYrA_9c",
   authDomain: "vallecamonicadelivery-webapp.firebaseapp.com",
   databaseURL: "https://vallecamonicadelivery-webapp.firebaseio.com",
   projectId: "vallecamonicadelivery-webapp",
   storageBucket: "vallecamonicadelivery-webapp.appspot.com",
   messagingSenderId: "841271355615",
   appId: "1:841271355615:web:57d79c0cf3c6a9744f216a"
};
firebase.initializeApp(firebaseConfig);
export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const deleteStore = (itemId) => {
   const itemRef = firebase.database().ref(`/listing/${itemId}`);
   itemRef.remove();
}