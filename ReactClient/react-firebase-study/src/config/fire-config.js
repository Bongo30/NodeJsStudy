import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

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

