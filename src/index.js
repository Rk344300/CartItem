import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUN5Cr751nuHLCW2ZF8CBizUy5w3fvo0k",
  authDomain: "cart-7bad1.firebaseapp.com",
  // databaseURL : "https://cart-7bad1.firebaseio.com",
  projectId: "cart-7bad1",
  storageBucket: "cart-7bad1.appspot.com",
  messagingSenderId: "359930427934",
  appId: "1:359930427934:web:86e67d3d607a5e15c3cc0f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


