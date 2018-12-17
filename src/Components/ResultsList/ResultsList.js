/* ==========================================================================
 * Results List Component 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import {ResultItem} from '..'
    import PropTypes from 'prop-types'
    



// --------------------------------------
// Create Component
// --------------------------------------
    const ResultsList = (props) => {

        // --------------------------------------
        // Render ResultsList
        // --------------------------------------

            const {carsList} = props;
            return (
                <Fragment>
                    {
                        carsList.map((vehicle, index)=> {
                            return <ResultItem key = {index} vehicle = {vehicle}/>
                        })
                    }
                </Fragment>
            )
        

    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    ResultsList.propTypes = {
        carsList: PropTypes.array,
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ResultsList;  