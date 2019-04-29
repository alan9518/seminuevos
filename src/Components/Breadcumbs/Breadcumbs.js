/* ==========================================================================
 * BreadCumbs Component 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */
// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react';
    import {ProjectLink} from '../../Components/'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const Breadcumbs = (props) => {
        const {previousName, previousPath} = props;
        console.log("TCL: Breadcumbs -> previousPath", previousPath)
       
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className = "breadcrumb-row">
                    <div className = "container">
                        <ul className = "list-inline">
                            <li><ProjectLink route={''}>Inicio</ProjectLink></li>
                            {previousName && <li><ProjectLink route={'previousPath'}>{previousName}</ProjectLink></li>}
                            {/* <li>Resultados</li> */}
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // Breadcumbs.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default Breadcumbs;                  