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
                            <div className="col-md-5 col-sm-5 text-left"> © Copyright 2019 <br/> Sr. Seminuevos sitio desarrollado por 
                                <span className="text-primary"><a href="https://www.sarcuzastudio.com/" target="_blank" rel="noopener noreferrer">Sarcuza studio</a></span> 
                            </div>
                            <div className="col-md-7 col-sm-7 text-right "> 
                                {/* <a href="aviso-de-privacidad.html"> Aviso de privacidad</a> |  */}
                                <ProjectLink route = {'aviso-de-privacidad'}> Aviso de Privacidad </ProjectLink> |
                                <ProjectLink route = {'consejos-de-seguridad'}>&nbsp; Consejos de Seguridad</ProjectLink> |
                                <a href="on-road-price.html"> &nbsp;NORMA y Prácticas comerciales</a>
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