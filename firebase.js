import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseapp = firebase.initializeApp({
  apiKey: 'AIzaSyAhYSwCfHABcBqIytgy_ykwhv0NhO6E7Ds',
  authDomain: 'apportfolio-a097c.firebaseapp.com',
  projectId: 'apportfolio-a097c',
  storageBucket: 'apportfolio-a097c.appspot.com',
  messagingSenderId: '390962687011',
  appId: '1:390962687011:web:db7f939eba87f16b31d596',
});

const db = firebase.firestore();
//const auth = firebase.auth();
//const storage = firebase.storage();
//const functions = firebase.functions();

export { db };
