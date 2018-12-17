/* ==========================================================================
 * Login View Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */
// --------------------------------------
// Import Dependences
// --------------------------------------
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// --------------------------------------
// Create Component Class
// --------------------------------------
class Login extends Component {

    // --------------------------------------
    // Constructor
    // --------------------------------------   
    constructor(props) {
        super(props);
    }

    // --------------------------------------
    // Render Login
    // --------------------------------------
    renderLogin() {
        return (
            <Fragment>
                 <div className="page-content">
                    <div className="dlab-bnr-inr overlay-black-middle"  style={{backgroundImage:'url(../../images/banner/bnr3.jpg)'}}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-row">
                        <div className="container">
                            <ul className="list-inline">
                                <li><a href="#">Home</a></li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-full content-inner bg-white contact-style-1">
                        <div className="container">
                            
                            <div className="row">
                    
                                <div className="col-md-6">
                                    <div className="p-a30 bg-gray clearfix m-b30 ">
                                        <h2>Inicia Sesi&oacute;n</h2>
                                        <div className="dzFormMsg"></div>
                                        <form method="post" className="dzForm" action="script/contact.php">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzName" type="text" required className="form-control" placeholder="Your Name"/>>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group"> 
                                                            <input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Subject"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button name="submit" type="submit" value="Submit" className="site-button "> <span>Submit</span> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    // --------------------------------------
    // Render Component
    // --------------------------------------
    render() {
        return this.renderLogin();
    }
}

// --------------------------------------
// Define PropTypes
// --------------------------------------
Login.propTypes = {
    prop: PropTypes
};

// --------------------------------------
// Export Component
// --------------------------------------
export default Login;
