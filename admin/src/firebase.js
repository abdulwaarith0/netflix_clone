import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-clone-ae7ca.firebaseapp.com",
  projectId: "netflix-clone-ae7ca",
  storageBucket: "netflix-clone-ae7ca.appspot.com",
  messagingSenderId: "1079778073944",
  appId: "1:1079778073944:web:35feac97c1756fb572192d",
  measurementId: "G-Q8JRX0GG6D"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
