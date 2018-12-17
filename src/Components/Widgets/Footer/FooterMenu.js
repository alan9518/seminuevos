/* ==========================================================================
 * Footer Menu Component 
 * 12/12/2018
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
    const FooterMenu = (props) => {

        const {menuTitle} = props;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="widget widget_services">
                    <h4 className="m-b15 text-uppercase">{menuTitle}</h4>
                    <div className="dlab-separator bg-primary"></div>
                    <ul>
                        <li><a href="new-car-latest.html">Latest Cars</a></li>
                        <li><a href="new-car-upcoming.html">Upcoming Cars</a></li>
                        <li><a href="used-car-search.html">Search Used Car</a></li>
                        <li><a href="used-car-sell.html">Car Sell</a></li>
                        <li><a href="compare-car.html">Compare Car</a></li>
                        <li><a href="car-review.html">Car Review</a></li>
                    </ul>
                </div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // FooterMenu.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default FooterMenu; 