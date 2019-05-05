/* ==========================================================================
 ** FIlter Item Component
 ** 19/04/2019
 ** Alan Medina Silva
 ** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from "react";
    import PropTypes from "prop-types";


// --------------------------------------
// Create Functional Component
// --------------------------------------
    const FilterItem = (props) => {
        const {displayText, value, removeFilterFromArray} = props;
        return (
            <div className = "sr-activeFilters" >
                <span >  {`${displayText } : ${value}`}  </span> 
                <i className = "fa fa-close" onClick = { (value) => removeFilterFromArray(value)} name = {value}>  </i>
            </div>
        )
    };


// --------------------------------------
// Define PropTypes
// --------------------------------------
    FilterItem.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default FilterItem;
