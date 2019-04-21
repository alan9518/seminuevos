/* ==========================================================================
 * Prodcut Details View 
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import {SmallSlider, IconsGrid, ContactBox,ContactForm, Carrousel, SubHeader, Breadcumbs, StrippedTable, AppLoader} from '../../Components/';
    import {Endpoints} from '../../services/endpoints';
    import axios from 'axios';
    import PropTypes from "prop-types";
    

// --------------------------------------
// Create Component Class
// --------------------------------------
    class Details extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
            this.state = {
                details : {},
                relatedProducts : [],
                imagenesAnuncio : [],
                anuncioDetails : {},
                sellerContact : [],
                showContactForm : false,
                name : '',
                mail : '',
                telephone : '',
                message : ''
            }

        }


        // --------------------------------------
        // LOAD API Data
        // --------------------------------------
        componentDidMount() {
            this.loadAPI();
        }


    /* ==========================================================================
     *  API Connection
     ========================================================================== */
        
        // --------------------------------------
        // GET All Requests
        // --------------------------------------
        async loadAPI() {
            const {ID} = this.props.match.params;
            const anunciosDetails =  await this.getAnuncioDetails(ID);

            
            const relatedAnuncios  = await this.getRelatedAnuncios(anunciosDetails.id_marca);
			
			
            // Get Images
            const imagenesAnuncio =  await this.getImagenesAnuncios(ID);
			// Get Seller Info

            this.setState({
                anuncioDetails : anunciosDetails,
                relatedAnuncios : relatedAnuncios,
                imagenesAnuncio : imagenesAnuncio,
                isLoaded : true
            })
        }


        /** --------------------------------------
        // Get Anuncios Data
        // With Promises
        // @returns {An Promise Object}
        // --------------------------------------*/
        async getAnuncioDetails(id_anuncio) {
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    id_anuncio : id_anuncio || 0
                }  
            }
            const anuncioDetailsPromise = await axios.get(Endpoints.getAnuncioDetails, settings);
            const anunciosData = await anuncioDetailsPromise.data;
        
            return anunciosData;
        }

        /** --------------------------------------
        // Get Anuncios Data
        // With Promises
        // @returns {An Promise Object}
        // --------------------------------------*/
        async getImagenesAnuncios(id_anuncio) {
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    id_anuncio : id_anuncio || 0
                }  
            }
            const anuncioImagesPromise = await axios.get(Endpoints.getImagenesAnuncio, settings);
            const anuncioImagesData = await anuncioImagesPromise.data;
        
            return anuncioImagesData;
        }


        /** --------------------------------------
        // Get Related Anuncios 
        // With Promises
        // @returns {An Promise Object}
        // --------------------------------------*/
        async getRelatedAnuncios(id_marca) {
			console.log("TCL: Details -> getRelatedAnuncios -> id_marca", id_marca)
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    relatedMarca : id_marca || 0
                }  
            }
            const relatedAnunciosPromise = await axios.get(Endpoints.getRelatedAnuncios, settings);
            const relatedAnunciosData = await relatedAnunciosPromise.data;
        
            return relatedAnunciosData;
        }

        /** --------------------------------------
        // Get Anuncios Data
        // With Promises
        // @returns {An Promise Object}
        // --------------------------------------*/
        async getVendedorInfo(isAgency, id_vendedor, id_agencia) {
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    id_anuncio : id_vendedor  || id_agencia
                }  
            }
            const serviceURL = isAgency != null ? Endpoints.getVendedorDetails : Endpoints.getAgencyDetails;
            const anuncioImagesPromise = await axios.get(serviceURL, settings);
            const anuncioImagesData = await anuncioImagesPromise.data;
        
            return anuncioImagesData;
        }




    
    /* ==========================================================================
     *  Handle State
     ========================================================================== */

        // --------------------------------------
        // Show/Hide Contact Form
        // --------------------------------------
        toggleContactInfo = ()=> {
            const {showContactForm} = this.state;
            this.setState({showContactForm : !showContactForm})
        }

        // --------------------------------------
        // Control Contact Form Data
        // --------------------------------------

        handleInputChange = (event)=> {
			console.log("TCL: Details -> handleInputChange -> event", event.target)
            const {target} = event;
			console.log("TCL: Details -> handleInputChange -> target", target)
            const {value} = target;
			console.log("TCL: Details -> handleInputChange -> value", value)

            this.setState({
                [event.target.name]: event.target.value
            })
        }


    /* ==========================================================================
     *  Render Methods
     ========================================================================== */

        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            const {imagen_destacada} = this.state.anuncioDetails
            return <SubHeader headerTtitle = {"Resultados"} backgroundImage = {imagen_destacada}/>
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs previousName = {'Regresar a la Búsqueda'}/>
        }


        // --------------------------------------
        // Product Image Slider
        // --------------------------------------
        renderSlider() {
            const {imagenesAnuncio} = this.state;
			console.log("TCL: Details -> renderSlider -> imagenesAnuncio", imagenesAnuncio)
            return  imagenesAnuncio && <SmallSlider imagesData = {imagenesAnuncio}/>
        }

        // --------------------------------------
        // Contact Box Info
        // --------------------------------------
        renderContactBoxInfo(precio) {
            const {correo, titulo} = this.state.anuncioDetails;
            return <ContactBox titulo = {titulo}  precio = {precio} correo = {correo} onClick = {this.toggleContactInfo}/>
        }


        // --------------------------------------
        // Render Contact Form
        // --------------------------------------
        renderContactForm () {
            const {precio, titulo} = this.state.anuncioDetails;
            const {name, mail, telephone, message} = this.state;

            return (
                <ContactForm 
                    titulo = {titulo} 
                    name = {name} 
                    mail = {mail} 
                    telephone = {telephone} 
                    message ={message} 
                    precio = {precio}
                    handleInputChange =  {this.handleInputChange}
                    cancel = {this.toggleContactInfo}
                />
            )
        }



        // --------------------------------------
        // Render Related Products
        // --------------------------------------
        renderRelatedAnuncios() {
            const {relatedAnuncios} = this.state;
            const itemsToShow = relatedAnuncios.length;
            return (
                <div className="row sm-carrouselRow">
                    <div className="col-lg-12">
                        <Carrousel carrouselData = {relatedAnuncios} itemsToShow = {itemsToShow} />
                    </div>
                </div>
            )
        }

        // --------------------------------------
        // Render Features
        // --------------------------------------
        renderFeatures() {
            const {anuncioDetails} = this.state;
            
            return <IconsGrid {...anuncioDetails}/>
        }


        // --------------------------------------
        // Format TimeStampDate
        // --------------------------------------
        formatDate(date) {
            const newDate = new Date(date);
            const formatedDate = newDate.toLocaleDateString();
            return formatedDate;
        }

        // --------------------------------------
        // Render Details
        // --------------------------------------
        renderDetails() {
            const {anuncioDetails, showContactForm} = this.state;
            const {titulo, ubicacion, created_at, precio} =  anuncioDetails;
            return  (
                <Fragment >
                    <div className="page-content">
                        
                        {this.renderSubHeader()}
                        
                        {this.renderBreadcumbs()}
                            
                            <div className="section-full p-t50 bg-white content-inner-2">
                                <div className="container">
                                    <div className="row">
                                        
                                        <div className="col-md-8">
                                            <div className="m-b30">
                                                <h3 className="h3 m-t0">{titulo}</h3>
                                                <ul className="used-car-dl-info">
                                                    <li><i className="fa fa-map-marker"></i> {ubicacion } </li>
                                                    <li><i className="fa fa-calendar"></i> {this.formatDate( created_at)}</li>
                                                    {/*<li><i className="fa fa-eye"></i> 14 Views</li>*/}
                                                </ul>
                                            </div>
                                            <div className="owl-fade-one owl-carousel owl-btn-center-lr sm-carrouselContainer">
                                               {/* Slider */}
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                    {this.renderSlider()}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="clearfix m-t30">
                                            {/* Info Tab */}
                                                <StrippedTable data = {anuncioDetails} />
                                                
                                            </div>
                                            
                                           
                                        </div>
                                        
                                        <div className="col-md-4">

                                            {showContactForm === true ? this.renderContactForm() : this.renderContactBoxInfo(precio)}
                                            {this.renderFeatures()}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-full bg-white  p-t40 p-b70">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="section-head">
                                                <h3 className="h4 text-uppercase">Relacionados</h3>
                                                
                                            </div>
                                        {/* Related Products */}
                                        {this.renderRelatedAnuncios()}
                                        </div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                </Fragment>
            )
           
        }

        renderLoader (isTransparent) {
            const container = document.getElementsByClassName('int-formFieldsContainer')[0]
            const containerWidth = isTransparent ? container.clientWidth : null;
            const containerHeight = isTransparent ? container.clientHeight : null;
            return <div> <AppLoader customHeight = { containerHeight || 800} isTransparent = {isTransparent} customWidth = {containerWidth}/> </div>
        }


        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            const {isLoaded} = this.state;
            return isLoaded ? this.renderDetails() : this.renderLoader() ;
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    Details.propTypes = {
        prop: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default Details;
