/* ==========================================================================
 **
 ** 19/04/2019
 ** Alan Medina Silva
 ** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from "react";
    import PropTypes from "prop-types";
    import {FilterItem} from '../../index'
    import './styles.css';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const ActiveFilters = (props) => {
        const {filters, cleanFilterOptions} = props;
        return (
            <div className = "sr-filtersList"> 
                {  
                    filters.map((filter)=> {
                        return <FilterItem displayText = {filter.displayText} value = {filter.value} />
                    })
                }

                {filters.length > 0 && <span className = "sr-removeFilters" onClick = {cleanFilterOptions}> Remover Filtros  </span>}
            </div>
        )
    };



// --------------------------------------
// Define PropTypes
// --------------------------------------
    ActiveFilters.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default ActiveFilters;
