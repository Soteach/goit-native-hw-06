import firebase from 'firebase/compat';
import 'firebase/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCs1kfB1xWA7Mi1KtBrooFWNnGnRc3W500',
  authDomain: 'rn-social-a1f1e.firebaseapp.com',
  projectId: 'rn-social-a1f1e',
  storageBucket: 'rn-social-a1f1e.appspot.com',
  messagingSenderId: '502110576966',
  appId: '1:502110576966:web:18e23fba47caa2738f4547',
};

export default firebase.initializeApp(firebaseConfig);
