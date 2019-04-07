/* ==========================================================================
 * Consejos de Seguridad Page 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import {SubHeader, Breadcumbs} from '../../Components/';
    import bgImage from '../../images/header/normaBG.jpg';
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component Class
// --------------------------------------
    class ConsejosDeSeguridad extends Component {

        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader 
                headerTtitle = {'NORMA y Practicas Comerciales'} 
                backgroundImage = {bgImage}/>
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs/>
        }



        // --------------------------------------
        // Render ConsejosDeSeguridad
        // --------------------------------------
        renderConsejosDeSeguridad() {
            return (
                <Fragment>
                    
                    <div class="page-content bg-white">


                        {this.renderSubHeader()}
                        {this.renderBreadcumbs()}
                        
                        
                        <div class="content-area">
                            
                            <div class="container">
                                <div class="row">
                                    
                                    <div class="blog-post blog-single">
                                        <div class="section-head text-center head-1">
                                        <h3 class="h3 text-uppercase">Normas oficiales mexicanas</h3>
                                        <div class="dlab-separator bg-gray-dark"></div>
                                        
                                        <div class="dlab-post-text">
                                            <ul class="list-angle-right">
                                                <li>
                                                    <a href="http://www.dof.gob.mx/nota_detalle.php?codigo=5141411&amp;fecha=03/05/2010NORMA" target="_blank">
                                                        Oficial Mexicana NOM-122-SCFI-2010, Prácticas comerciales-Elementos normativos para la comercialización y/o consignación de vehículos usados.
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://dof.gob.mx/nota_detalle.php?codigo=5436325&amp;fecha=09/05/2016&#10;" target="_blank">
                                                        NOM-194-SCFI-2015 Dispositivos de seguridad esenciales en vehículos nuevos-Especificaciones de seguridad
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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
            return this.renderConsejosDeSeguridad();
        }
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// ConsejosDeSeguridad.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ConsejosDeSeguridad; 