import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
  <GoogleOAuthProvider clientId="147826279872-jr962huf8k6r17b68pd7ihq32catnao6.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </BrowserRouter>,
);

reportWebVitals();
