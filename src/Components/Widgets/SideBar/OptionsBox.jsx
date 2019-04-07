/* ==========================================================================
 * Options Box Widget Using Custom Checkboxes 
 * 13/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import {CheckBoxes} from '../../../Components';
    import PropTypes from "prop-types";


// --------------------------------------
// Create Component Class
// --------------------------------------
    class OptionsBox extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
        }

        // --------------------------------------
        // Render OptionsBox
        // --------------------------------------
        renderOptionsBox() {
            const {options, onChange} = this.props;


            return (
                <Fragment>
                    <div className="product-brand">
                        {options.map((option)=> {
							console.log("TCL: OptionsBox -> renderOptionsBox -> option", option)
                            return (
                                <CheckBoxes 
                                    key = {`chk-${option.label}`} 
                                    id = {`chk-${option.label}`} 
                                    label = {option.label} 
                                    value = {option.value}
                                    onChange = {onChange}
                                    checked = {option.checked}
                                />
                            )
                        })}
                    </div>
                </Fragment>
            );
        }
        
        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderOptionsBox();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    OptionsBox.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
    };

// --------------------------------------
// Export Component
// --------------------------------------
export default OptionsBox;
