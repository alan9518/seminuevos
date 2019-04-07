/* ==========================================================================
 * Add New Project View
 * Main App View 
 * 13/06/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import {
        CardContainer,
        NewAnuncioFormContainer,
        SubHeader, Breadcumbs,
    } from '../../Components';
    // import Alert from 'react-s-alert';
    // import 'react-s-alert/dist/s-alert-default.css';
    // import 'react-s-alert/dist/s-alert-css-effects/slide.css';


// --------------------------------------
// Store The Input values
// --------------------------------------
    var newAnuncio = {
        id_modelo : null,
        id_marca : null,
        tipo_anuncio : null,
        fotos_anuncio : [],
        foto_anuncio : null,
        precio_anuncio : null
    }


// --------------------------------------
// Create Component
// --------------------------------------
    class NewAnuncio extends Component {


        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader headerTtitle={'Crear Anuncio'} />
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs />
        }





        // // --------------------------------------
        // // Render Form body
        // // --------------------------------------

        renderFormBody() {
            
            return (
                <Fragment> 
                    <div className = "page-content" >

                        {this.renderSubHeader()}
                        
                        {this.renderBreadcumbs()}
                        
                        {/*<div className = "section-full content-inner bg-white pti-formContainer">*/}
                        <div className = "section-full content-inner pti-formContainer">
                            <div className = "container">
                                <div className = "row">
                                    <div className = "col-sm-12 col-md-12 col-lg-12">
                                        <NewAnuncioFormContainer anuncio={NewAnuncio} history={this.props.history} />
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
            return (
                <div className="pti-NewAnuncioContainer">
                    {this.renderFormBody()}
                    {/*<Alert stack={{ limit: 3 }} />*/}
                </div>
            )
        }
    }

// --------------------------------------
// Export Component
// --------------------------------------
export default NewAnuncio;