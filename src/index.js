/* ==========================================================================
 * Init React App 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import * as serviceWorker from './serviceWorker';
    import CSS  from './css/index.css';
    // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// --------------------------------------
// Render App
// --------------------------------------
    ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
