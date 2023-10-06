import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpHw1NEjPM2F1mFOmvBPCOTRnNdUMa88k",
  authDomain: "computer-store-1bd7e.firebaseapp.com",
  projectId: "computer-store-1bd7e",
  storageBucket: "computer-store-1bd7e.appspot.com",
  messagingSenderId: "339322580733",
  appId: "1:339322580733:web:4903080d1667723a29d894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
