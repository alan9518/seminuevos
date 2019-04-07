/* ==========================================================================
 * Footer Botton Layout 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react';
    import {ProjectLink} from '../../Components/'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const FooterBottom = () => {


        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 text-left"> © Copyright 2019  Sr. Seminuevos sitio desarrollado por 
                                <span className="text-primary"><a href="https://www.sarcuzastudio.com/" target="_blank" rel="noopener noreferrer">&nbsp;Sarcuza studio</a></span> 
                            </div>
                            <div className="col-md-6 col-sm-6 text-right footerLinks"> 
                                {/* <a href="aviso-de-privacidad.html"> Aviso de privacidad</a> |  */}
                                <ProjectLink route = {'/aviso-de-privacidad'}>Aviso de Privacidad</ProjectLink> |
                                <ProjectLink route = {'/consejos-de-seguridad'}> Consejos de Seguridad</ProjectLink> |
                                <ProjectLink route = {'/norma-y-practicas-comerciales'}> NORMA y Prácticas comerciales</ProjectLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// FooterBottom.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
export default FooterBottom; 