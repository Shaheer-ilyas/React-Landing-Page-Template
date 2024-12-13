import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Application from './components/Application';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the OAuth provider
import ViewApplications from './components/ViewApplications';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVDsX15KMIOUFFR2cQZXHCsHIbOAGfPOM",
  authDomain: "grantyourwishfoundation-88b95.firebaseapp.com",
  projectId: "grantyourwishfoundation-88b95",
  storageBucket: "grantyourwishfoundation-88b95.firebasestorage.app",
  messagingSenderId: "198002427035",
  appId: "1:198002427035:web:bc2fbb5913d20596eeb23e",
  measurementId: "G-VCX938Y8RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <GoogleOAuthProvider clientId="189661213738-0m6dfqligt2hslr2g0a1qiunh7tib5qs.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<Application />} />
        <Route path="/applications" element={<ViewApplications />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
