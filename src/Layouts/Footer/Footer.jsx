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
    import {FooterLogo,FooterMenu,FooterSubscribe,FooterBottom} from '../../Components'
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
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                   {/* Footer Logo */}
                                   <FooterLogo logo =  {Logo}/>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    {/* Footer Menu Widget 1 */}

                                    <FooterMenu menuTitle = {'Navegación'}></FooterMenu>


                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget recent-posts-entry">
                                        <h4 className="m-b15 text-uppercase">Posts </h4>
                                        <div className="dlab-separator bg-primary"></div>
                                        <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="images/blog/recent-blog/pic1.jpg" alt="" width="200" height="143"/> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="images/blog/recent-blog/pic2.jpg" alt="" width="200" height="160"/> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="images/blog/recent-blog/pic3.jpg" alt="" width="200" height="160"/> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    {/*  */}
                                    <FooterSubscribe menuTitle = {'Suscribete'}/>
                                </div>
                            </div>
                            <div className="clearfix">
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
                            </div>
                        </div>
                    </div>
                    
                   <FooterBottom/>
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
