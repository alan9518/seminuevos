/* ==========================================================================
 * SubHeader Component For Normal Pages 
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
    const SubHeader = (props) => {

        const {headerTtitle} = props;
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className = "dlab-bnr-inr overlay-black-middle" style={{backgroundImage: 'http://carzone.dexignlab.com/xhtml/images/banner/bnr3.jpg'}}>
                    <div className = "container">
                        <div className = "dlab-bnr-inr-entry">
                            <h1 className = "text-white">{headerTtitle}</h1>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // SubHeader.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default SubHeader; 