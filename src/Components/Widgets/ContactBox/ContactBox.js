/* ==========================================================================
 * Contact Box Widget For Details View 
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import {AppButton} from '../../../Components';
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const ContactBox = (props) => {

        const {precio, titulo ,correo} = props;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>

                <div className="car-dl-info m-b30">
                    <div className="price">
                        <h2 className="m-t0 m-b5">{`Precio $ ${precio}`}</h2>
                        <span>{titulo}</span>	
                    </div>			
                    <form>
                        <h3 className="m-t0 m-b5">Contacto Vendedor</h3>
                        <ul>
                            <li>
                                
                                <a href = {`mailto:${correo}`}> {correo} </a>
                            </li>
                            
                        </ul>
                        <div className="clearfix">
                            
                            <AppButton
                                buttonClass={"site-button button-lg btn-block sr-bigButton"}    
                                buttonText = {"Contactar al Vendedor"}
                                onClick = {props.onClick}/>
                        </div>
                    </form>
                </div>

            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // ContactBox.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ContactBox; 