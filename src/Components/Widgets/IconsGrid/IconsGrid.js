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
    const IconsGrid = () => {


        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="used-car-features clearfix m-b30">
                    <div className="car-features">
                        <i className="flaticon-calendar"></i>
                        <h5>2017</h5>
                        <span>Model</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-dashboard"></i>
                        <h5>6,900 km</h5>
                        <span>Driven</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-gas-station"></i>
                        <h5>Diesel</h5>
                        <span>Fuel</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-mechanic"></i>
                        <h5>Individual</h5>
                        <span>Seller</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-calendar"></i>
                        <h5>Automatic</h5>
                        <span>Transmission</span>	
                    </div>
                    <div className="car-features">
                        <i className="flaticon-car-key"></i>
                        <h5>First</h5>
                        <span>Owner</span>	
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