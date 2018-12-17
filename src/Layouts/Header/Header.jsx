/* ==========================================================================
 * Header Layout 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */
// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component } from "react";
    import PropTypes from "prop-types";

// --------------------------------------
// Create Component Class
// --------------------------------------
    class Header extends Component {

        // --------------------------------------
        // Render Header
        // --------------------------------------
        renderHeader() {
            const {children} = this.props;
            return (
                <header className="site-header header-transparent">

                    {children}
                
                </header>
            )
        }



        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderHeader();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    // Header.propTypes = {
    //     prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
    export default Header;
