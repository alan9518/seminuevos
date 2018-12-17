/* ==========================================================================
 * Login Form Component 
 * 16/12/2018
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
    const LoginForm = () => {


        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                    <div className="p-a30 bg-gray clearfix m-b30 ">
							<h2>Send Message Us</h2>
							<div className="dzFormMsg"></div>
							<form method="post" className="dzForm" action="script/contact.php">
							<input type="hidden" value="Contact" name="dzToDo" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input name="dzName" type="text" required className="form-control" placeholder="Your Name"/>
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
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// LoginForm.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
    export default LoginForm; 