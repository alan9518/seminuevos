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
import { FooterLogo, FooterMenu, FooterSubscribe, FooterBottom, FacebookFeed } from '../../Components'
import PropTypes from "prop-types";


// --------------------------------------
// Create Component Class
// --------------------------------------
class Footer extends Component {


    // --------------------------------------
    // Remove Instagram Feed
    // --------------------------------------

    hideInstagram() {
        const isntagramContainer = document.getElementsByClassName('.powrMark.text-center');
        console.log("TCL: Footer -> componentDidMount -> isntagramContainer", isntagramContainer)
        // isntagramContainer.style.visibility = "hidden";
    }

    // --------------------------------------
    // Render Footer
    // --------------------------------------
    renderFooter() {
        return (
            <footer className="site-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="col-md-6">
                            <h3>Facebook Feed</h3>
                            <FacebookFeed/>
                        </div>

                        <div className="col-md-6">
                            <h3>Instagram Feed</h3>
                            {/*<div class="powr-instagram-feed" id="caf697ab_1554153979"></div>*/}
                            <iframe 
                                src="//lightwidget.com/widgets/4fa054684d5258a8a7d386134e61119a.html" 
                                scrolling="no" 
                                allowtransparency="true" 
                                class="lightwidget-widget" 
                                title = "instagram" 
                                // style="width:100%;border:0;overflow:hidden;"
                                style = {{width:'100%' , border : 0, overflow:'hidden' }} >
                                >
                            </iframe>

                        </div>
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
