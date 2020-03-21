import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
 import { reduxFirestore, getFirestore } from 'redux-firestore'
 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

const firebaseConfig  = {
    apiKey: "AIzaSyCUnihvINnb3T0zzuctUKlqVnLQKbcwMu8",
    authDomain: "marioplan-38609.firebaseapp.com",
    databaseURL: "https://marioplan-38609.firebaseio.com",
    projectId: "marioplan-38609",
    storageBucket: "marioplan-38609.appspot.com",
    messagingSenderId: "540030953526",
    appId: "1:540030953526:web:e51b5727c496e4728f9097"
    };


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

    firebase.firestore();

const store = createStore(rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({ getFirebase, getFirestore })
        ),
        reduxFirestore(firebase, firebaseConfig),
    )
);

const config = { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true };

const rrfProps = {
    firebase,
    config,
    dispatch: store.dispatch,
    createFirestoreInstance
}



ReactDOM.render(<Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>  
  <App />
  </ReactReduxFirebaseProvider>
 </Provider>, document.getElementById('root'));

