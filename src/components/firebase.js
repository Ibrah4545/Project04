import firebase from 'firebase'



  const firebaseConfig = {
    apiKey: "AIzaSyAdIcUh3ZnvDxBOsnUFYHXpVrL3ofULbq0",
    authDomain: "pfolio-2d6fa.firebaseapp.com",
    projectId: "pfolio-2d6fa",
    storageBucket: "pfolio-2d6fa.appspot.com",
    messagingSenderId: "464391909473",
    appId: "1:464391909473:web:3fa11cd7567939a541ba20"
  };

  const firebaseApp=firebase.initializeApp
  (firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const increment=firebase.firestore.FieldValue.increment(1);
  const decrement =firebase.firestore.FieldValue.increment(-1);


  const provider = new firebase.auth
  .GoogleAuthProvider();
  
  export{auth,provider,storage,increment,decrement};
  export default db;
  