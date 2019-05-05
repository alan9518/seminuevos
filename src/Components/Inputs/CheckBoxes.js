/* ==========================================================================
 * Custom CheckBox Component 
 * 13/12/2018
 * Alan Medina Silva
 ========================================================================== */
// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, {
        Component,
        Fragment
    } from 'react'
    import PropTypes from 'prop-types'


// --------------------------------------
// Create Component
// --------------------------------------
    const CheckBoxes = (props) => {
        const {id, label, value, onChange, checked} = props;
		

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return ( 
            <Fragment> 
                <div className="search-content" >
					<input id={id} type="checkbox" checked = {checked} onChange = {onChange} value  = {value}/>
					<label htmlFor={id} className="search-content-area">{label} </label>
				</div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    CheckBoxes.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
    }


// --------------------------------------
// Export Component
// --------------------------------------
export default CheckBoxes;