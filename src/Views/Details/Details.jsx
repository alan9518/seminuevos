/* ==========================================================================
 * Prodcut Details View 
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import {SmallSlider, IconsGrid, ContactBox, Carrousel, SubHeader, Breadcumbs, StrippedTable} from '../../Components/';
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
                relatedProducts : [
                    {
                        id : 1 , 
                        title : 'GTA 5 Lowriders DLC', 
                        price :  '25000', 
                        img : 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic1.jpg',
                        shortDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        meta : [
                            
                                {label :'año' ,value: '2006'},
                                {label :'km' ,value: '10000'},
                                {label :'asientos',value: '4 '},
                                {label :'cc' ,value: '250'},
                                {label :'transimisión' ,value: 'manual'},
                            
                        ]
                    },
                    {
                        id : 2 , 
                        title : 'GTA 5 Lowriders DLC', 
                        price :  '25000', 
                        img : 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic2.jpg',
                        shortDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        meta : [
                            
                                {label :'año' ,value: '2006'},
                                {label :'km' ,value: '10000'},
                                {label :'asientos',value: '4 '},
                                {label :'cc' ,value: '250'},
                                {label :'transimisión' ,value: 'manual'},
                            
                        ]
                    },
                    {
                        id : 1 , 
                        title : 'GTA 5 Lowriders DLC', 
                        price :  '25000', 
                        img : 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic1.jpg',
                        shortDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        meta : [
                            
                                {label :'año' ,value: '2006'},
                                {label :'km' ,value: '10000'},
                                {label :'asientos',value: '4 '},
                                {label :'cc' ,value: '250'},
                                {label :'transimisión' ,value: 'manual'},
                            
                        ]
                    },
                    {
                        id : 1 , 
                        title : 'GTA 5 Lowriders DLC', 
                        price :  '25000', 
                        img : 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic1.jpg',
                        shortDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        meta : [
                            
                                {label :'año' ,value: '2006'},
                                {label :'km' ,value: '10000'},
                                {label :'asientos',value: '4 '},
                                {label :'cc' ,value: '250'},
                                {label :'transimisión' ,value: 'manual'},
                            
                        ]
                    },
                    
                    
                ],
                imagenesAnuncio : [],
                anuncioDetails : {},
                sellerContact : [],
            }

        }

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
            // Get Images
            const imagenesAnuncio =  await this.getImagenesAnuncios(ID);
			// Get Seller Info

            this.setState({
                anuncioDetails : anunciosDetails,
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
     *  Render Methods
     ========================================================================== */

        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader headerTtitle = {"Resultados"}/>
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs/>
        }


        // --------------------------------------
        // Product Image Slider
        // --------------------------------------
        renderSlider() {
            const {imagenesAnuncio} = this.state;
            return <SmallSlider imagesData = {imagenesAnuncio}/>
        }

        // --------------------------------------
        // Contact Box Info
        // --------------------------------------
        renderContactBoxInfo(precio) {
            return <ContactBox precio = {precio} />
        }

        // --------------------------------------
        // Render Related Products
        // --------------------------------------
        renderRelatedProducts() {
            const {relatedProducts} = this.state;
            const itemsToShow = relatedProducts.length;
            return (
                <div className="row sm-carrouselRow">
                    <div className="col-lg-12">
                        <Carrousel carrouselData = {relatedProducts} itemsToShow = {itemsToShow} />
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
            const {anuncioDetails} = this.state;
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
                                                <StrippedTable/>
                                                
                                            </div>
                                            { /* Modal*/ }
                                            <div className="modal fade lead-form-modal" id="car-details" tabindex="-1" role="dialog" >
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <div className="modal-body clearfix">
                                                            <div className="pull-letf max-width-300"></div>
                                                            <div className="lead-form">
                                                                <form>
                                                                    <h3 className="m-t0">Personal Details</h3>
                                                                    <div className="form-group">
                                                                        <input value="" className="form-control" placeholder="Name"/>
                                                                    </div>	
                                                                    <div className="form-group">
                                                                        <input value="" className="form-control" placeholder="Mobile Number"/>
                                                                    </div>
                                                                    <div className="clearfix">
                                                                        <button type="button" className="btn-primary site-button btn-block">Submit </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4">

                                            {this.renderContactBoxInfo(precio)}
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
                                        {this.renderRelatedProducts()}
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
            const {isLoaded} = this.state;
            return isLoaded ? this.renderDetails() : null ;
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
