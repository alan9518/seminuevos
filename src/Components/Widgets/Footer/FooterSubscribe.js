/* ==========================================================================
 * Subscribe to NewsLetter Widget Component 
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
    const FooterSubscribe = (props) => {

        const {menuTitle} =  props;
    
    // --------------------------------------
    // Render Component
    // --------------------------------------
        return (
        <Fragment>
            <div className="widget ">
                <h4 className="m-b15 text-uppercase">{menuTitle} </h4>
                <div className="dlab-separator bg-primary"></div>
                <p className="m-tb20">Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p>
                <form className="dlab-subscribe-form">
                    <div className="input-group m-b15">
                        <input name="dzEmail" required="" className="form-control " type="email" placeholder="Enter Your Email"/>
                    </div>
                    <div className="input-group">
                        <button name="submit" type="submit" value="Submit" className="site-button btn-block">
                            SUBSCRIBE <i className="fa fa-angle-right font-18 m-l10"></i>
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// FooterSubscribe.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
    export default FooterSubscribe; 