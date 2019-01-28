/* ==========================================================================
 * Icons Grid for Details View 
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const IconsGrid = (props) => {

        const {year, kilometraje,tipo_combustible, estilo_carroceria, propietarios, transmision} =  props;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="used-car-features clearfix m-b30">
                    <div className="car-features">
                        <i className="flaticon-calendar"></i>
                        <h5>{year}</h5>
                        <span>Modelo</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-dashboard"></i>
                        <h5>{kilometraje} km</h5>
                        <span>Kilometraje</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-gas-station"></i>
                        <h5>{tipo_combustible}</h5>
                        <span>Combustible</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-car-key"></i>
                        <h5>{propietarios}</h5>
                        <span>Propietarios</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-calendar"></i>
                        <h5>{transmision}</h5>
                        <span>Transmision</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-car-key"></i>
                        <h5>{estilo_carroceria}</h5>
                        <span>Carroceria</span>	
                    </div>
                </div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// IconsGrid.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
    export default IconsGrid; 