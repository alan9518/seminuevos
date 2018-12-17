/* ==========================================================================
 * NavBar Component 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------    
    import React, {Component} from 'react';
    import {ProjectLink} from '../../Components'
    import styles from './styles.css';
    import logo from '../../images/logo.png';
import appNavigationRoutes from '../../Routes/Routes';

// --------------------------------------
// Create Component
// --------------------------------------
    const NavBar = (props) => {
        const {navBarRoutes} =  props;
        return (
            <div className="sticky-header main-bar-wraper">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
            
                        <div className="logo-header mostion">
                           <ProjectLink route = {'/'}>
                                <img src={logo} className="logo" alt="" />
                           </ProjectLink>
                        </div>
            
                        <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed"
                            aria-expanded="false">
                            <i className="fa fa-bars"></i>
                        </button>
            
                        <div className="header-nav navbar-collapse collapse">
                            <ul className="nav navbar-nav">

                                {
                                    navBarRoutes.map((route) => {
                                        if(route.navBarName) 
                                            return ( 
                                                <li> <ProjectLink route = {route.path}>
                                                    {route.navBarName} 
                                                    {/* <i className="fa fa-chevron-down"></i> */}
                                                    </ProjectLink>
                                                </li>
                                                )
                                        
                                    })
                                }
                            </ul>
            
                        </div>
                    </div>
                </div>
            </div>
        )
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default NavBar;



