/* ==========================================================================
 * Floating Search Component For Home 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import PropTypes from "prop-types";
    import {Endpoints} from '../../services/endpoints';
    import axios from 'axios';
    import Select from 'react-select';
    import {SingleSelect, ProjectLink, CustomSelect} from '../../Components';
    import {withRouter, Redirect} from 'react-router-dom';

    import './styles.css';

// --------------------------------------
// Create Component Class
// --------------------------------------
    class FloatingSearch extends Component {

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
                isModelosLoaded : false,
                precioBase : '',
                precioTope : '',
                searchResults : {},
                redirectUser : false
            }
        }

        // --------------------------------------
        // Load API
        // --------------------------------------
        componentDidMount() {
            this.setState( {
                isLoaded : true
            })
        }
        


    /* ==========================================================================
    ** API Connection
    ** ========================================================================== */

            
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
                    },
                    params : {
                        page : '1'
                    }
                }
                
                console.log("TCL: getAnunciosData -> settings", settings)
                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnuncios, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        page : '1'
                    }
                });
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
            // Submit Form
            // --------------------------------------
            handleFormSubmit = (event)  => {
                event.preventDefault()
                const {selectedMarca, selectedModelo, selectedUbicacion, } = this.state;
                
                // Get Anuncios
                this.getAnunciosData().then((data) =>{
                    console.log('TCL: this.getAnunciosData -> data', data)
                    const anunciosData =  data;
                    // Set State to Redirect User
                    this.setState({
                        searchResults : anunciosData,
                        redirectUser: true
                    });
                    
                });
                

                
                
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
        // Render Search Box
        // --------------------------------------
        renderSearchBox() {
            const {modelos, selectedModelo, precioBase, precioTope, redirectUser, searchResults} = this.state

            if (redirectUser) {
                return <Redirect to={{ pathname: '/Demo2/resultados', searchResults: {searchResults}}} />
            }
            

            const {tipoData, marcasData, ubicacionData} = this.props;

            return (
                <Fragment>
                    <div className = "form-slide">
                        <div className = "container">
                            <form className = " search-car"  onSubmit = {this.handleFormSubmit}>
                                <div className = "form-head">
                                    <h2>Encuentra tu Pr&oacute;ximo Auto</h2>
                                </div>
                                
                                <div className = "form-find-area">
                                    
                                    <div className = "tab-content">
                                        
                                        <div id="new-car"  className = "tab-pane active clearfix">
                                        
                                            <div  id="budgetDiv" className = "new_form_div">

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

                                                {this.renderMarcasSelect(marcasData)}

                                                <div className = "input-group">
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

                                            <div className = "input-group">
                                                    
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
                                                            
                                            <div className="input-group">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <input type="text" className = "form-control sm-searchInput" placeholder = "Precio Desde" onChange = {this.handleInputChange} value = {precioBase} name = {"precioBase"}/>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <input type="text" className = "form-control sm-searchInput" placeholder = "Precio Hasta" onChange = {this.handleInputChange}  value = {precioTope} name = {"precioTope"}/>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            
                                            <div className = "input-group">
                                                <button className = "site-button button-lg btn-block" type="submit">Buscar</button>

                                            </div>
                                            
                                            <div className = "input-group text-center">

                                                
                                              {      /*<ProjectLink route = {`/Demo2/resultados`}>
                                                        <button className = "site-button button-lg btn-block" type="submit">Buscar</button>
                                                    </ProjectLink  >
                                            
                                                */}
                                                {// <ProjectLink route = {`/resultados`}>
                                                //     <span className = "site-button-link">
                                                //         B&uacute;squeda Avanzada 
                                                //     </span>
                                                // </ProjectLink>
                                                }
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>	
                
                    <div className="clearfix"></div>
                </Fragment>
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            const {isLoaded} = this.state;
            return isLoaded && this.renderSearchBox();
        }
}

// --------------------------------------
// Define PropTypes
// --------------------------------------
    // FloatingSearch.propTypes = {
    // prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
    export default withRouter(FloatingSearch);
