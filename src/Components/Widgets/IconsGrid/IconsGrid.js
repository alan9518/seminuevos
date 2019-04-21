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


        const types = [
            {name : 'coupe', icon : 'flaticon-car'},
            {name : 'compacto', icon : 'flaticon-car-1'},
            {name : 'crossover', icon : 'flaticon-car-3'},
            {name : 'descaptoable', icon : 'flaticon-car-2'},
            {name : 'furgoneta', icon : 'flaticon-car-5'},
            {name : 'minvan', icon : 'flaticon-car-6'},
            {name : 'suv', icon : 'flaticon-car-2'},
            {name : 'sedan', icon : 'flaticon-car-8'},
            {name : 'pickup', icon : 'flaticon-pickup-truck'}
            
        ]


        const getCarIcon = (carroceria)=> {
            const iconObject = types.filter((carr)=> carr.name === carroceria.toLowerCase())[0]
            return iconObject.icon;
        }

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
                        <i className="flaticon-dashboard"></i>
                        <h5>{transmision}</h5>
                        <span>Transmision</span>	
                    </div>
                    <div className="car-features">
                        <i className = {getCarIcon(estilo_carroceria)}></i>
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