/* ==========================================================================
 * Consejos de Seguridad Page 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react';
    import {SubHeader, Breadcumbs} from '../../Components/';
    import bgImage from '../../images/header/seguridadBG2.jpg';
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
                headerTtitle = {'Consejos de Seguridad'} 
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
                    
                    <div className="page-content bg-white">


                        {this.renderSubHeader()}
                        {this.renderBreadcumbs()}
                        
                        
                        <div className="content-area">
                            
                            <div className="container">
                                <div className="row">
                                    
                                <div className="blog-post blog-single">
                                        <div className="section-head text-center head-1">
                                        <span className="text-primary">Consejos de Seguridad</span>
                                        <h3 className="h3 text-uppercase">Recomendaciones emitidas por la SSP</h3>
                                        <div className="dlab-separator bg-gray-dark"></div>
                                        </div>
                                        <div className="dlab-post-text">
                                            <ul className="list-angle-right">
                                                <li>No acepte realizar pago en efectivo, por algún vehículo.</li>
                                                <li>Solicite la revisión del vehículo físicamente, antes de realizar la compra.</li>
                                                <li>Antes de realizar el pago mediante alguna institución financiera, verifique que no tenga reporte de robo en el siguiente sitio web: <a href="http://www2.repuve.gob.mx:8080/ciudadania/" target="_blank">http://www2.repuve.gob.mx:8080/ciudadania/</a></li>
                                                <li>De preferencia que el contacto, se efectúe en algún lugar público (plaza comercial) y vaya siempre acompañado.</li>
                                                <li>Desconfíe de vehículos en venta que estén por debajo de su precio de mercado.</li>
                                                <li>Asegúrese que los pagos de tenencia estén cubiertos (puede ir a la Tesorería de su estado) y que la verificación no esté vencida.</li>
                                                <li>No olvide comprobar si las placas que porta actualmente el auto coinciden con las registradas en la tarjeta de circulación.</li>
                                                <li>Elabore una carta responsiva o de compra venta, en la que registre la fecha de la transacción, los datos del vehículo (número de motor, número de serie, modelo, marca, color), su firma y la de la persona que se lo vendió, así como copia de sus identificaciones oficiales (credencial de elector, pasaporte, cartilla).</li>
                                            </ul>
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