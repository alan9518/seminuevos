/* ==========================================================================
 * Results Grid Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */


// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import {ProductCard} from '..'
    import PropTypes from 'prop-types'




// --------------------------------------
// Create Component
// --------------------------------------
    const ResultsGrid = (props) => {

        // --------------------------------------
        // Render ResultsGrid
        // --------------------------------------

            const {searchResults} = props;
            return (
                <Fragment>
                    {
                        searchResults && searchResults.map((vehicle, index)=> {
                            return (
                                <div className = "col-md-4">
                                    <ProductCard key = {index} vehicle = {vehicle}/>
                                </div>
                            )
                        })
                    }
                </Fragment>
            )
        

    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    ResultsGrid.propTypes = {
        carsList: PropTypes.array,
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ResultsGrid;  