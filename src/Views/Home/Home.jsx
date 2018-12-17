/* ==========================================================================
 * Home Page Component View 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component } from "react";
    import {Slider,FloatingSearch} from '../../Components'
    import PropTypes from "prop-types";

// --------------------------------------
// Create Component Class
// --------------------------------------
    class Home extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
        }

        // --------------------------------------
        // Render Slider
        // --------------------------------------
        renderSlider() {
            return <Slider/>
        }

        // --------------------------------------
        // Render Floating Search
        // --------------------------------------
        renderSearch() {
            return <FloatingSearch/>
        }

        // --------------------------------------
        // Render Home Body
        // --------------------------------------
        renderContent() {
            return (
                <div className="container-fluid">
                    <h2>Content</h2>
                </div>
            )
        }

        // --------------------------------------
        // Render Home
        // --------------------------------------
        renderHomeView() {
            return (
                <div className="page-content">
                    {this.renderSlider()}
                    {this.renderSearch()}
                    {this.renderContent()}
                </div>  
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderHomeView();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    // Home.propTypes = {
    // prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
    export default Home;
