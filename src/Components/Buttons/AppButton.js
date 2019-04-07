/* ==========================================================================
 * Custom General Button Component 
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const AppButton = (props) => {

        const {buttonText, buttonClass, onClick} =  props;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <button 
                    type="button" 
                    // className="btn-primary site-button btn-block" 
                    className = {buttonClass}
                    title = {buttonText} 
                    onClick = {props.onClick}>
                    {buttonText} 
                </button>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // AppButton.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default AppButton; 