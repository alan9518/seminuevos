/* ==========================================================================
 * Home Page Component View 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component } from "react";
    import { Slider, FloatingSearch, AppLoader } from '../../Components'
    import axios from 'axios';
    import PropTypes from "prop-types";
    import {Endpoints} from '../../services/endpoints';


// --------------------------------------
// Create Component Class
// --------------------------------------
    class Home extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
            this.state = {
                isLoaded : false,
            }

            this.tipoData = [
                    {value : undefined, label : 'Selecciona el Tipo'},
                    {value : '1', label : 'Autos'},
                    {value : '2', label : 'Motos'},
                    {value : '3', label : 'Clásicos'}
            ];

            this.ubicacionData = [];
        
        }

            // --------------------------------------
            // Load API
            // --------------------------------------
            componentDidMount() {
                this.loadAPI();
            }




        /* ==========================================================================
        ** API Connection
        ** ========================================================================== */


                // --------------------------------------
                // Get All requests
                // --------------------------------------
                async loadAPI() {
                    const marcasArray = await this.loadMarcas();
                        this.marcasData =  marcasArray;
                    const ubicacionArray = await this.loadUbicacion();
                        this.ubicacionData =  ubicacionArray;
                    

                    this.setState( {
                        isLoaded : true
                    })

                }

                
                /** --------------------------------------
                // Get Marcas
                // @returns {An array With all the Marcas}
                // --------------------------------------*/
                async loadMarcas () {
                    const settings = { 
                        headers : { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        }
                    }
                    const loadMarcasPromise = await axios.get(Endpoints.getAllMarcas, {settings});
                    const marcasArray = await loadMarcasPromise.data;
                
                    return marcasArray;
                }


                /** --------------------------------------
                // Get Marcas
                // @returns {An array With all the Marcas}
                // --------------------------------------*/
                async loadUbicacion () {
                    const settings = { 
                        headers : { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        }
                    }
                    const loadUbicacionPromise = await axios.get(Endpoints.getAllEstados, {settings});
                    const ubicacionArray = await loadUbicacionPromise.data;
                    // const ubicacionData = this.formatSelectValues(ubicacionArray);
                
                    return ubicacionArray;
                }




        // --------------------------------------
        // Render Slider
        // --------------------------------------
        renderSlider() {
            return <Slider />
        }

        // --------------------------------------
        // Render Floating Search
        // --------------------------------------
        renderSearch() {
            const {marcasData, tipoData, ubicacionData} = this;
            return <FloatingSearch marcasData = {marcasData} ubicacionData = {ubicacionData} tipoData = {tipoData}/>
        }

        // --------------------------------------
        // Render Home Body
        // --------------------------------------
        // renderContent() {
        //     return (
        //         <div className="container-fluid">
        //             <FacebookFeed/>
        //         </div>
        //     )
        // }

        // --------------------------------------
        // Render Home
        // --------------------------------------
        renderHomeView() {
            return (
                <div className="page-content">
                    {this.renderSlider()}
                    {this.renderSearch()}
                    
                </div>
            )
        }

        // --------------------------------------
        // Render Loader
        // --------------------------------------
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
            const { isLoaded } = this.state;
            return isLoaded ? this.renderHomeView() : this.renderLoader();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
// Home.propTypes = {
// prop: PropTypes
// };

// --------------------------------------
// Export Component
// --------------------------------------
export default Home;
