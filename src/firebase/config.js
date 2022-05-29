import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBajKA3lmc4anIjCylLCXdZTga41Pprej0',

	authDomain: 'chat-app-2e7c9.firebaseapp.com',

	projectId: 'chat-app-2e7c9',

	storageBucket: 'chat-app-2e7c9.appspot.com',

	messagingSenderId: '120655035345',

	appId: '1:120655035345:web:4a17e0946b13a65ffb7ef0',

	measurementId: 'G-ZH0NX8TZGJ'
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
