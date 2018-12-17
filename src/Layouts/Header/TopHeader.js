/* ==========================================================================
 * Top Header Component 
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
  const TopHeader = () => {
    return (
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="dlab-topbar-right topbar-social">
              <ul>
                <li>
                  <a href="javascript:void(0);"><i className="fa fa-envelope-o"></i> info@srseminuevos.com</a>
                </li>
                <li><a href="https://www.facebook.com/srseminuevos/" target="_blank" className="site-button-link facebook hover"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/srseminuevos/" target="_blank" className="site-button-link google-plus hover"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
		  </div>
    )
  }



// --------------------------------------
// Define PropTypes
// --------------------------------------
// TopHeader.propTypes = {
//   prop: PropTypes
// };

// --------------------------------------
// Export Component
// --------------------------------------
export default TopHeader;
