/* ==========================================================================
** Facebook Feed Component Layout
** 26/02/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import PropTypes from 'prop-types';
// --------------------------------------
// Create Component Class
// --------------------------------------
    class FacebookFeed extends Component {

        /* ==========================================================================
        ** Component Setup
        ** ========================================================================== */

            constructor(props) {
                super(props);
                this.fbplugins = React.createRef();
            }

            // --------------------------------------
            // Set Initial Values
            // --------------------------------------
            componentDidMount() {
                if (window.FB) {
                    window.FB.XFBML.parse(this.fbplugins.current);
                }
            }
            
        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */
            // --------------------------------------
            // Render Projects
            // --------------------------------------
            renderFacebookFeed() {
                return (
                    <Fragment>
                        <div id="fbplugins" ref={this.fbplugins}>
                            <div className="fb-page" data-href="https://www.facebook.com/srseminuevos/" data-tabs="timeline" data-width="700" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/srseminuevos/" className="fb-xfbml-parse-ignore">
                                    <a href="https://www.facebook.com/srseminuevos/">Sr. Seminuevos</a>
                                </blockquote>
                            </div>
                            
                        </div>
                    </Fragment>)


                    
                    
            }
            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() {
                return this.renderFacebookFeed();
            }
    }
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    // FacebookFeed.propTypes = {
    //     props: PropTypes
    // };


    
// --------------------------------------
// Export Component
// --------------------------------------
    export default FacebookFeed;