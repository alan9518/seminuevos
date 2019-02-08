/* ==========================================================================
 * Footer Layout Component 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
import React, { Component } from "react";
import Logo from '../../images/logo.png';
import { FooterLogo, FooterMenu, FooterSubscribe, FooterBottom } from '../../Components'
import PropTypes from "prop-types";


// --------------------------------------
// Create Component Class
// --------------------------------------
class Footer extends Component {

    // --------------------------------------
    // Render Footer
    // --------------------------------------
    renderFooter() {
        return (
            <footer className="site-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row sm-footerRow">
                            <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                {/* Footer Logo */}
                                <FooterLogo logo={Logo} />
                            </div>

                            <div className="col-md-6 col-md-offset-2 col-sm-6 col-xs-6 footer-col-4">
                                {/* Footer Menu Widget 1 */}

                                {/*<FooterMenu menuTitle={'Navegación'}></FooterMenu>*/}


                            </div>


                        </div>
                        {/*<div className="clearfix">
                            <ul className="full-social-icon clearfix">
                                <li className="fb col-md-3 col-sm-6 col-xs-6 m-b30">
                                    <a href="#"><i className="fa fa-facebook"></i> Share On Facebook </a>
                                </li>
                                <li className="tw col-md-3 col-sm-6 col-xs-6 m-b30">
                                    <a href="#"><i className="fa fa-twitter"></i> Tweet About it </a>
                                </li>
                                <li className="gplus col-md-3 col-sm-6 col-xs-6 m-b30">
                                    <a href="#"><i className="fa fa-google-plus"></i> Google Plus | 78+ </a>
                                </li>
                                <li className="linkd col-md-3 col-sm-6 col-xs-6 m-b30">
                                    <a href="#"><i className="fa fa-linkedin"></i> Linkedin | 21k </a>
                                </li>
                            </ul>
                        </div>*/}
                    </div>
                </div>

                <FooterBottom />
            </footer>
        )
    }

    // --------------------------------------
    // Render Component
    // --------------------------------------
    render() {
        return this.renderFooter();
    }
}

// --------------------------------------
// Define PropTypes
// --------------------------------------
// Footer.propTypes = {
//     prop: PropTypes
// };

// --------------------------------------
// Export Component
// --------------------------------------
export default Footer;
