/* ==========================================================================
 * Form Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react';
    import {CheckBoxes} from '../../Components'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const Form = (props) => {

        const {formTitle , formFields, children} = props;
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="p-a30 bg-gray clearfix m-b30 ">
                    <h2>{formTitle}</h2>
                    <div className="dzFormMsg"></div>
                    <form method="post" className="dzForm" action="script/contact.php">
                        <div className="row">


                            {
                                formFields.map((formItem) => {
                                    
                                        return <FormInput 
                                            inputType = {formItem.inputType}  
                                            inputName = {formItem.inputName} 
                                            inputPlaceholder = {formItem.inputPlaceholder} 
                                            value = {formItem.value}
                                            onChange = {formItem.onClick}
                                        />  
                                })
                            }


                            <div className="col-md-12">
                                <button name="submit" type="submit" value="Submit" className="site-button "> 
                                    <span>Ingresar</span> 
                                </button>
                            </div>

                            <div className = "input-group text-center">                                
                            {/* Space For Extra Content */}
                            {children}
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }

    const FormInput = ({inputType, inputName, inputPlaceholder, value, onChange})=> {
        return (
            <div className="col-md-12">
                <div className="form-group">
                    <div className="input-group">
                    {
                        inputType === 'checkbox' 
                                    ? <CheckBoxes id = {inputName}  label = {inputPlaceholder}  value = {value} onClick = {onChange}/>
                                    : <input name={inputName} type={inputType} required className="form-control" placeholder={inputPlaceholder}/>
                    }
                    </div>
                </div>
            </div>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    Form.propTypes = {
        prop: PropTypes
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default Form; 