/* ==========================================================================
 * Custom Single Option Select Component 
 * Using react-Singleselect 
 * 15/11/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component } from "react";
    import PropTypes from "prop-types";
    import Select from 'react-select';
    import './styles.css';
// --------------------------------------
// Create Component Class
// --------------------------------------
    const SingleSelect = (props) => {
        return (
            <Select  
                className="basic-single"
                classNamePrefix="select"
                defaultValue={props.defaultValue}
                isDisabled={props.isDisabled}
                isLoading={props.isLoading}
                isClearable={props.isClearable}
                isRtl={props.isRtl}
                isSearchable={props.isSearchable}
                name={props.name}
                options={props.options}
            />
        )
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    SingleSelect.propTypes = {
        options: PropTypes.array,
        isClearable: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        isRtl: PropTypes.bool,
        isSearchable: PropTypes.bool,
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default SingleSelect;
