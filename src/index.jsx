import React from 'react';
import ReactDOM from 'react-dom/client';
import './Global.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/lightslider/dist/css/lightslider.css";
import "../node_modules/lightslider/dist/js/lightslider.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
