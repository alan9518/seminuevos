/* ==========================================================================
 * Footer Logo Widget Component
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
    const FooterLogo = (props) => {

        const logo = props.logo;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="widget widget_about">
                    <div className="logo-footer"><img src={logo} alt=""/></div>
                {/*    <p className="m-tb20"><strong></strong>  simply dummy text of the print ing and in type setting industry. Lorem Ipsum has bee the industry's standard...</p>

                    <ul className="dlab-contact-info">
                        <li><i className="flaticon-placeholder"></i>Demo Address #8901 Marmora Road Chi Minh City, Vietnam</li>
                        <li><i className="flaticon-customer-service"></i>Phone : 0800-123456 (24/7 Support Line)</li>
                    </ul>*/}
                </div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // FooterLogo.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default FooterLogo; 