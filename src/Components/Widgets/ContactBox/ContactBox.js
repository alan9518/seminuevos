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

        const {precio} = props;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>

                <div className="car-dl-info m-b30">
                    <div className="price">
                        <h2 className="m-t0 m-b5">{`Precio $ ${precio}`}</h2>
                        <span>Hyundai EON LPG Magna Plus</span>	
                    </div>			
                    <form>
                        <p className="m-t0 m-b5">Vendedor</p>
                        <ul>
                            <li>Correo</li>
                            <li>Telefono</li>
                        </ul>
                        <div className="clearfix">
                            
                            <AppButton buttonText = {"Contactar al Vendedor"}/>
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