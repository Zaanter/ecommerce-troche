import '@firebase/firestore'

import firebase from 'firebase/app'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBQE2X2sAuiAI477P98IIqazKf_2drvQvs",
    authDomain: "coderecommerce-4d701.firebaseapp.com",
    projectId: "coderecommerce-4d701",
    storageBucket: "coderecommerce-4d701.appspot.com",
    messagingSenderId: "445359858956",
    appId: "1:445359858956:web:4f64e7166b4fe1168e1529"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}

