/* ==========================================================================
** First Step Anuncio Details
** 21/02/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import {AppButton, SingleSelect, CardContainer, CustomSelect} from '../../../Components';
    import {Endpoints} from '../../../services/endpoints';
    import axios from 'axios';
    import Select from 'react-select';
    
    import PropTypes from 'prop-types';

// --------------------------------------
// Create Component Class
// --------------------------------------
    class AnuncioDetails extends Component { 
            
        /* ==========================================================================
        ** Component Setup
        ** ========================================================================== */
    
            // --------------------------------------
            // Constructor
            // --------------------------------------
            constructor(props) { 
                super(props);
                this.state = { 
                    isLoaded : false, 
                    selectedMarca : {value : undefined, label : 'Selecciona la Marca'},
                    selectedModelo : {value : undefined, label : 'Selecciona el Modelo'},
                    selectedUbicacion : {value : undefined, label : 'Selecciona el Estado'},
                    modelos : [],
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
            // Set Initial Values
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
				console.log('​FloatingSearch -> loadAPI -> this.marcasData', this.marcasData)

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

            
            /** --------------------------------------
            // Get Modelos
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async loadModelos(marca_id) {    
                const {value} =  marca_id;
                const loadModelosPromise = axios.get(Endpoints.getModelosByMarca, { headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        marca_id : value || 0
                    }  
                });

                return loadModelosPromise;
            }

            /** --------------------------------------
            // Get Anuncios Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getAnunciosData() {
                const settings = { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }
                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnuncios, {settings});
                const anunciosData = await loadAnunciosPromise.data;
            
                return anunciosData;
            }


            
        /* ==========================================================================
        ** Handle State
        ** ========================================================================== */
            
            // --------------------------------------
            // Handle Marcas Select State
            // --------------------------------------
            handleSelectMarcaChange = (selectedMarca) => {
                
                this.loadModelos(selectedMarca)
                .then((modelosAnswer)=> {
                    let modelos =  modelosAnswer.data;
                    this.setState({
                        selectedMarca:selectedMarca,
                        modelos : modelos,
                        isModelosLoaded : false
                    })

                })
			    
            }

            // --------------------------------------
            // Get Model Value
            // --------------------------------------
            handleSelectModeloChange = (selectedModelo) => {
				console.log('​handleSelectModeloChange -> selectedModelo', selectedModelo)
                this.setState({
                    selectedModelo : selectedModelo
                })
            }

            // --------------------------------------
            // Get Ubicacion Value
            // --------------------------------------
            handleSelectUbicacionChange = (selectedUbicacion) => {
				console.log('​handleSelectModeloChange -> selectedUbicacion', selectedUbicacion)
                this.setState({
                    selectedUbicacion : selectedUbicacion
                })
            }

            // --------------------------------------
            // Get JSON Response and Format to 
            // React-select Type
            // --------------------------------------
            formatSelectValues(valuesAray) {
                const data = valuesAray.map((valueItem)=> {
                    let data = {
                        label : valueItem.nombre,
                        value : valueItem.id
                    }
                    return data;
                })
                return data;
            }

            
            // --------------------------------------
            // get Price Filters Value
            // --------------------------------------
            handleInputChange =(event)=> {
                const target = event.target;
                const name = target.name;
                const value = target.value;

                this.setState({
                    [name]: value
                });

            }

            // --------------------------------------
			// Fill Select With Years
			// --------------------------------------
			getyearsArray () {

				const year = (new Date()).getFullYear();
				const arraySize = year - 1950;
				const yearsArray = Array.from(new Array(arraySize), (val,index) => {
					return {value : (year - index), label : (year - index)}
				});
				return yearsArray;
			}


        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */

        
            // --------------------------------------
            // Render Marcas Select
            // Hanlde its State By its side
            // --------------------------------------
            renderMarcasSelect(marcas) {
                const {selectedMarca} = this.state;
                return (
                    <div className = "input-group">
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue = {marcas[0]} 
                            isClearable={false}
                            isSearchable={true}
                            name = {'brandSelect'}
                            value={selectedMarca}
                            onChange={this.handleSelectMarcaChange}
                            options={this.formatSelectValues(marcas)}
                        />
                    </div>
                )
            }


            
            // --------------------------------------
            // Render Year Selects
            // --------------------------------------		
            renderYearSelect() {
                
                return (
                    <SingleSelect  isClearable={false} isSearchable={true} options={this.getyearsArray()} name = {'startYearSelect'}/>
                )
            }


            // --------------------------------------
            // Render Year Selects
            // --------------------------------------	
        

            // --------------------------------------
            // Render Projects
            // --------------------------------------
            renderAnuncioDetails () { 
                const {modelos, selectedModelo, precioBase, precioTope, redirectUser, searchResults} = this.state
                const {tipoData, marcasData, ubicacionData} = this;
                return (
                    
                    <CardContainer cardTitle = {'Información del vehículo'}> 
                        <div className="container-fluid">

                            <div className = "row">

                                <div className = "col-md-12" sm="12">
                                    <div className = "row">

                                    <div className = "col-md-4" sm="12">
                                            <div className="pti-input-group">
                                                <label htmlFor="pti-ProjectName" className="grey-text">Tipo de Vehiculo*</label>
                                                
                                                <div className = "input-group">
                                                    <CustomSelect 
                                                        defaultValue = {tipoData[0]}
                                                        isClearable={false}
                                                        isSearchable={false}
                                                        options={tipoData}
                                                        name = {'searchTypeSelect'}
                                                        // onChange = {this.handleSelectMarcaChange}

                                                    />
                                            </div>
                                            </div>
                                        </div>


                                        <div className = "col-md-4" sm="12">
                                            <div className="pti-input-group">
                                                <label htmlFor="pti-ProjectName" className="grey-text">Marca *</label>
                                                {this.renderMarcasSelect(marcasData)}
                                            </div>
                                        </div>

                                        <div className = "col-md-4" sm="12">
                                            <div className="pti-input-group">
                                                <label className="grey-text">Modelo*</label>

                                                    <Select
                                                        className="basic-single"
                                                        classNamePrefix="select"
                                                        defaultValue = {modelos[0]} 
                                                        isClearable={false}
                                                        isSearchable={true}
                                                        name = {'brandSelect'}
                                                        value={selectedModelo}
                                                        onChange={this.handleSelectModeloChange}
                                                        options={this.formatSelectValues(modelos)}
                                                />

                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>





                            <div className = "row">

                                <div className = "col-md-3" sm="12">
                                    <div className="pti-input-group">
                                        <label htmlFor="pti-projectObjectives" className="grey-text">Año *</label>
                                        {this.renderYearSelect()}
                                    </div>
                                </div>


                                <div className = "col-md-3" sm="12">
                                    <div className="pti-input-group" id="">
                                        <label htmlFor="pti-projectOwner" className="grey-text">Estado</label>
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue = {{value : 0, 'label':'Selecciona el Estado'}}
                                            isClearable={false}
                                            isSearchable={true}
                                            options={this.formatSelectValues(ubicacionData)}
                                            name = {'LocationSelect'}
                                            onChange={this.handleSelectUbicacionChange}
                                        />
                                
                                    </div>
                                </div>
                                {/*   <div className = "col-md-3" sm="12">
                                    <div className="pti-input-group">
                                        <label htmlFor="pti-projectApprover" className="grey-text">Ciudad</label>

                                        

                                    </div>
                                </div>*/
                                }   


                                <div className = "col-md-3" sm="12">
                                    <div className="pti-input-group">
                                        <label htmlFor="pti-projectApprover" className="grey-text">Kilometraje</label>

                                        <input type="text" className = "form-control sm-searchInput" placeholder = "Kilometros" onChange = {this.handleInputChange}  value = {precioTope} name = {"precioTope"}/>

                                    </div>
                                </div>

                            </div>




                            <div className="container-fluid">
                                <div className="pti-navButtons">
                                
                                    <AppButton 
                                        className = "site-button button-lg btn-block" 
                                        buttonText = {'Siguiente'}>
                                        onClick={this.changeNextTab}
                                    </AppButton>
                                </div>
                            </div>

                        </div>
                    </CardContainer>
                )
            }

            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() { 
                const {isLoaded} = this.state;
                return isLoaded &&  this.renderAnuncioDetails() ; 
            }
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    AnuncioDetails.propTypes = { 
    props : PropTypes 
    }; 
// --------------------------------------
// Export Component
// --------------------------------------
    export default AnuncioDetails;