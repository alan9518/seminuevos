/* ==========================================================================
** Anuncio Confimration Label
** 24/03/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PropTypes from 'prop-types';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const AnuncioLabel = (props) => {

        const {label, value } = props;

        return (
            <div className="row">
                <div className="col-md-6"> 
                    <b> <h4 className = "sr-ConfLabel"> {label} </h4> </b>   
                </div>
                <div className="col-md-6">  
                    <h4 className = "grey-text"> {value.label ? value.label : value} </h4>
                </div>
            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    AnuncioLabel.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default AnuncioLabel;