import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA4Tr3BXaiqL-NNzVGFzpRX_e126EFUluw",
    authDomain: "firstfirebase-d5d84.firebaseapp.com",
    projectId: "firstfirebase-d5d84",
    storageBucket: "firstfirebase-d5d84.appspot.com",
    messagingSenderId: "545869241652",
    appId: "1:545869241652:web:f79efd78403483731dd961",
    measurementId: "G-Y8J3G2P3DX"
};

try{
    firebase.initializeApp(firebaseConfig);
}catch(err){
    if(!/already exists/.test(err.message)){
        console.error('Firease initialization error',err.stack)
    }
}

const fire = firebase;
export default fire;