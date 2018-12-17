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
// Styles 
// --------------------------------------
    // const styles = {
    //     padding : 
    // }

// --------------------------------------
// Create Component
// --------------------------------------
    const CheckBoxes = (props) => {
        const {id, label, value, onClick} = props;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return ( 
            <Fragment> 
                <div className="search-content" onClick = {onClick}>
					<input id={id} type="checkbox"/>
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