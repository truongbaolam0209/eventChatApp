import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCcgEz7W1HD4EXptt-5TkDQ2gWU9pdR19s',
    authDomain: 'venue-app-479fe.firebaseapp.com',
    databaseURL: 'https://venue-app-479fe.firebaseio.com',
    projectId: 'venue-app-479fe',
    storageBucket: 'venue-app-479fe.appspot.com',
    messagingSenderId: '21765838102',
    appId: '1:21765838102:web:99369ed9f66e212a5dac37'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;