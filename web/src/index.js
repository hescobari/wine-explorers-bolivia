import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Routes
import {Routes} from './Routes';

// Styles
import 'crack-ux/style/General.css';
import 'crack-ux/style/themes/Travel.css';
import './General.css';
import './externals/fontello/css/crack.css';
import './externals/fontello/css/animation.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
