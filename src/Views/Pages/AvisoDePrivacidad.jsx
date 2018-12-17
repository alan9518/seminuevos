/* ==========================================================================
 * AvisoDePrivacidadA y Prácticas comerciales Page 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import {SubHeader, Breadcumbs} from '../../Components/'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component Class
// --------------------------------------
    class AvisoDePrivacidad extends Component {

        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader headerTtitle = {'Nuestro Aviso de Privacidad'} />
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs/>
        }



        // --------------------------------------
        // Render AvisoDePrivacidad
        // --------------------------------------
        renderAvisoDePrivacidad() {
            return (
                <Fragment>
                    
                    <div class="page-content bg-white">
    

                        {this.renderSubHeader()}
                        {this.renderBreadcumbs()}
                        
                        
                        <div class="content-area">
                            
                            <div class="container">
                                <div class="row">
                                    
                                    <div class="col-sm-8 col-md-8 col-lg-9 m-b30">
                                        <h1 class="m-b20 m-t0">AVISO DE PRIVACIDAD</h1>
                                        <div class="dlab-separator bg-primary"></div>
                                        <p><strong>En términos de lo previsto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en lo sucesivo como “La Ley”), Señor Seminuevos S.A.S. DE C.V., establece el presente Aviso de Privacidad de conformidad con lo siguiente:</strong></p>
                                        <h2 class="m-t30 m-b10 ">Objeto</h2>
                                        <p>El presente Aviso de Privacidad tiene por objeto la protección de los datos personales, mediante su tratamiento legítimo, controlado e informado, a efecto de garantizar su privacidad, así como tu derecho a la autodeterminación informativa.</p>
                                        <h2 class="m-t30 m-b10 ">Datos Personales</h2>
                                        <p>Conforme al artículo 3, fracción V, de “La Ley”, se entiende por Datos Personales: Cualquier información concerniente a una persona física identificada o identificable.</p>
                                        <h2 class="m-t30 m-b10 ">Responsable</h2>
                                        <p>Señor Seminuevos S.A.S. DE C.V., de conformidad a lo dispuesto por la fracción I, del artículo 16 de “La Ley”, será la Responsable de tu información personal. Señor Seminuevos S.A.S. DE C.V., hará uso de los datos  únicamente  para crear usuario y base de datos para la venta del vehículo, así como para realizar los anuncios de conformidad a lo solicitado.</p>
                                        <p>Autorizas a Señor Seminuevos S.A.S. DE C.V.,  utilizar y tratar de forma automatizada tus datos personales e información suministrada, los cuales formarán parte de nuestra base de datos con la finalidad de usarlos en forma enunciativa, más no limitativa para: identificarte, ubicarte, comunicarte, contactarte, enviarte información, actualizar nuestra base de datos y obtener estadísticas.</p>
                                        <p>Señor Seminuevos S.A.S. DE C.V., como responsable del tratamiento de tus datos personales, está obligada a cumplir con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad tutelados en “La Ley”; por tal motivo Señor Seminuevos S.A.S. DE C.V.,  se compromete a tratar tu información con normas de confidencialidad y seguridad administrativa.</p>
                                        <h2 class="m-t30 m-b10 ">Derechos ARCO</h2>
                                        <p>En términos de lo establecido por el artículo 22 de “La Ley”, tienes derecho en cualquier momento a ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), al tratamiento de tus datos personales.</p>
                                        <p>En caso de que requieras algún cambio deberás enviar un correo a <a href="mailto:info@srseminuevos.com"> info@srseminuevos.com</a>, para consultar los requisitos y procesos para ejercer tus derechos ARCO.</p>
                                        <p>Las actualizaciones al presente Aviso de Privacidad y Términos y Condiciones, serán notificadas a través de correo electrónico.</p>
                                        <p>Protección de datos de Señor Seminuevos S.A.S. DE C.V.,: Si tienes algún comentario o consideras que tus datos personales han sufrido algún tipo de vulneración, puedes contactar a César Sotres Mesinas, enviando un correo electrónico a <a href="mailto:info@srseminuevos.com">info@srseminuevos.com</a></p>
                                        
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
            return this.renderAvisoDePrivacidad();
        }
    }


    // --------------------------------------
    // Define PropTypes
    // --------------------------------------
    // AvisoDePrivacidad.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default AvisoDePrivacidad; 