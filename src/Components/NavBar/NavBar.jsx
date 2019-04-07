/* ==========================================================================
** Nav Bar Component
** 31/03/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import { ProjectLink } from '..'
    import './styles.css';
    import logo from '../../images/logo.png';
    import PropTypes from 'prop-types';
// --------------------------------------
// Create Component Class
// --------------------------------------
    class NavBar extends Component {

        /* ==========================================================================
        ** Component Setup
        ** ========================================================================== */

            // --------------------------------------
            // Constructor
            // --------------------------------------
            constructor(props) {
                super(props);
                this.state = {
                    isLoaded: false,
                    toggleMobileMenu : false
                    
                }
            }


            // --------------------------------------
            // Set Initial Values
            // --------------------------------------
            toggleMobileMenu = (event)=> {
                
                const {toggleMobileMenu} = this.state;
                this.setState({
                    toggleMobileMenu : !toggleMobileMenu
                })
            }

        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */


            // --------------------------------------
            // Mi Account LIink
            // --------------------------------------
            renderMiAccountLink(onClick) {
                return (
                    <Fragment>
                        <li>
                            <ProjectLink route={'/mi-cuenta'}>
                                {"Mi Cuenta"}
                                {/*<i className="fa fa-chevron-down"></i> */}
                            </ProjectLink>
                        </li>

                        <li>
                            <ProjectLink route={'/nuevo-anuncio'}>
                                {"Crear Anuncio"}
                                {/*<i className="fa fa-chevron-down"></i> */}
                            </ProjectLink>
                        </li>

                        <li onClick={onClick}>
                            <a href="#">
                                {"Cerrar Sesión"}
                            </a>
                        </li>
                    </Fragment>
                )
            }

            // --------------------------------------
            // LOGIN Link
            // --------------------------------------

            renderLoginLink() {
                return (
                    <li>
                        <ProjectLink route={'/ingresar'}>
                            {"Ingresar"}
                        </ProjectLink>
                    </li>
                )
            }



            // --------------------------------------
            // Render Projects
            // --------------------------------------
            renderNavBar() {
                const {navBarRoutes, isUserLoggedIn, onClick} =  this.props;
                const mobileClass =  this.state.toggleMobileMenu ? '' : 'navbar-collapse collapse';
                return (
                    <Fragment>

                        <div className="sticky-header main-bar-wraper">
                            <div className="main-bar clearfix ">
                                <div className="container clearfix">

                                    <div className="logo-header mostion">
                                        <ProjectLink route={'/'}>
                                            <img src={logo} className="logo" alt="" />
                                        </ProjectLink>
                                    </div>

                                    <button 
                                        data-target=".header-nav" 
                                        data-toggle="collapse" 
                                        type="button" 
                                        onClick = {this.toggleMobileMenu}  
                                        className="navbar-toggle collapsed"
                                        aria-expanded="false">
                                        <i className="fa fa-bars"></i>
                                    </button>

                                    <div className = {`header-nav ${mobileClass}`}>
                                        <ul className="nav navbar-nav">

                                            {
                                                sessionStorage.getItem('userData') ? this.renderMiAccountLink(onClick) : this.renderLoginLink()
                                            }
                                        </ul>
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
                return this.renderNavBar();
            }
    }
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    NavBar.propTypes = {
        props: PropTypes
    };
// --------------------------------------
// Export Component
// --------------------------------------
    export default NavBar;