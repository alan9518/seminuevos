/* ==========================================================================
 * NavBar Component 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------    
    import React, {Fragment} from 'react';
    import {ProjectLink} from '..'
    import './styles.css';
    import logo from '../../images/logo.png';
    


// --------------------------------------
// Mi Account LIink
// --------------------------------------
    const renderMiAccountLink = (onClick) => {
        return (
            <Fragment>
                <li> 
                    <ProjectLink route = {'/mi-cuenta'}>
                        {"Mi Cuenta"} 
                        {/*<i className="fa fa-chevron-down"></i> */}
                    </ProjectLink>
                </li>

                <li> 
                    <ProjectLink route = {'/nuevo-anuncio'}>
                        {"Crear Anuncio"} 
                        {/*<i className="fa fa-chevron-down"></i> */}
                    </ProjectLink>
                </li>

                <li onClick = {onClick}> 
                    <a href="#">
                        {"Cerrar Sesión"} 
                    </a>
                </li>
            </Fragment>
        )
    }


    const renderLoginLink = ()=> {
        return (
            <li> 
                <ProjectLink route = {'/ingresar'}>
                    {"Ingresar"} 
                </ProjectLink>
            </li>
        )
    }   


// --------------------------------------
// Create Component
// --------------------------------------
    const NavBar2 = (props) => {
        const {navBarRoutes, isUserLoggedIn, onClick} =  props;
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
                                sessionStorage.getItem('userData') ? renderMiAccountLink(onClick) : renderLoginLink()
                                
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
    export default NavBar2;



    // {
    //     navBarRoutes.map((route) => {
    //         if(route.navBarName)  {
    //             if(route.userLogged ) {
    //                 if(sessionStorage.getItem('userData')) {
    //                     return ( 
    //                         <li> 
    //                             <ProjectLink route = {route.path}>
    //                                 {"Mi Cuenta"} 
    //                                 <i className="fa fa-chevron-down"></i> 
    //                             </ProjectLink>
    //                         </li>
    //                         )
    //                 }
    //                 else {
    //                     return ( 
    //                         <li> 
    //                             <ProjectLink route = {route.path}>
    //                                 {"Ingresar"} 
    //                                 {/* <i className="fa fa-chevron-down"></i> */}
    //                             </ProjectLink>
    //                         </li>
    //                         )
    //                 }
    //             }
    //             else {
    //                 if(route.navBarName !== "Ingresar")
    //                 return ( 
    //                     <li> 
    //                         <ProjectLink route = {route.path}>
    //                             {route.navBarName} 
                                
    //                         </ProjectLink>
    //                     </li>
    //                 )
    //             }
                
    //         }
                
            
    //     })
    // }