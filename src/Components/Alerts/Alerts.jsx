/* ==========================================================================
 * Error Alert Message 
 * 18/07/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Components
// --------------------------------------
    import React, { Component } from 'react'
    import Alert from 'react-s-alert';
    import 'react-s-alert/dist/s-alert-default.css';
    import 'react-s-alert/dist/s-alert-css-effects/slide.css';
    import 'react-s-alert/dist/s-alert-css-effects/scale.css';
    import 'react-s-alert/dist/s-alert-css-effects/flip.css';
    import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
    import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
    import 'react-s-alert/dist/s-alert-css-effects/genie.css';
    import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
 

// --------------------------------------
// Create Stateless Component
// --------------------------------------
    const errorAlert = () => {
        Alert.error('Test message error!', {
            position: 'bottom-left',
            effect: 'genie'
        });
    }


    export {
        errorAlert
    }
    
 