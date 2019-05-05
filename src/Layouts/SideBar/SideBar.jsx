/* ==========================================================================
 * SideBar Layout for Results View 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
	import {CustomAccordion, CustomAccordionItem, SingleSelect, PriceSlider, OptionsBox, RangeSelect, AppButton} from '../../Components';
	import {Endpoints} from '../../services/endpoints';
	import axios from 'axios';
	import Select from 'react-select';
	import PropTypes from "prop-types";

// --------------------------------------
// Create Component Class
// --------------------------------------
    class SideBar extends Component {

		// --------------------------------------
		// Constructor
		// --------------------------------------
		constructor(props) {
			super(props);
			this.state = {
				estados :  [],
				municipios : [],
				marcas : [],
				selectedMarca  : {value: null, label: 'Selecciona la Marca' },
				selectedEstado: { value: null, label: 'Selecciona el Estado' },
				selectedMunicipio: { value: null, label: 'Selecciona el Municipio' },
				startYear : {value: 0, label: ''},
				endYear : {value: (new Date().getFullYear()), label: ''},
            }

			// this.onChangeSelect =  this.onChangeSelect.bind(this);
		}


		// --------------------------------------
		// Load Data
		// --------------------------------------
		componentDidMount() {
            this.loadAPI();
        }


	
	/* ==========================================================================
	 *  Load API
	 ========================================================================== */


		  	// --------------------------------------
			// GET All Requests
			// --------------------------------------
			async loadAPI() {
				const estadosData =  await this.loadEstados();
				const marcasData = await this.loadMarcas();
				// const anunciosData =  await this.getAnunciosData();
				
				
				this.setState({
					estados : this.formatChekBoxData(estadosData),
					marcas : this.formatChekBoxData(marcasData),
					isLoaded : true
				})
			}

			/** --------------------------------------
            // Get Marcas
            // @returns {An array With all the Marcas}
            // --------------------------------------*/
            async loadMarcas() {
                const settings = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }
                const loadMarcasPromise = await axios.get(Endpoints.getAllMarcasWithAnuncios, { settings });
                const marcasArray = await loadMarcasPromise.data;

                return marcasArray;
            }
			


		 	/** --------------------------------------
            // Get Marcas
            // @returns {An array With all the Marcas}
            // --------------------------------------*/
            async loadEstados() {
                const settings = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }
                const loadEstadosPromise = await axios.get(Endpoints.getAllEstadosWithAnuncios, { settings });
                const ubicacionArray = await loadEstadosPromise.data;
                // const ubicacionData = this.formatSelectValues(ubicacionArray);

                return ubicacionArray;
            }


            /** --------------------------------------
            // Get Municipios
            // @returns {An array With all the Municipios}
            // --------------------------------------*/
            async loadMunicipios(id_estado) {
                const { value } = id_estado;
                const loadMunicipiosPromise = axios.get(Endpoints.getMunicipiosByEstado, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        id_estado: value || 0
                    }
                });

                return loadMunicipiosPromise;
            }


	/* ==========================================================================
	 *  Handle State
	 ========================================================================== */
		
		
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


			formatChekBoxData(valuesArray) {

				const data = valuesArray.map((valueItem) => {
			        let data = {
						checked : false,
			            label: valueItem.nombre,
			            value: valueItem.id
			        }
			        return data;
			    })
			    return data;

			}


			// --------------------------------------
            // Get Activew Checbox Items
            // --------------------------------------
			
            getEstadosItems() {
                const {estados} = this.state;
                const estadosValues = estados.filter((es)=>es.checked === true) ;

                return estadosValues;
			}


			// --------------------------------------
            // Get Activew Checbox Items
            // --------------------------------------
			
            getMarcasItems() {
                const {marcas} = this.state;
                const marcasValues = marcas.filter((ma)=>ma.checked === true) ;

                return marcasValues;
			}
			

			// --------------------------------------
            // Toggle CheckBoox State
            // --------------------------------------
            onCheckBoxEstadosChange = (event)=> {
                const {estados}  = this.state;
                let selectedEstados = estados.map((data)=> {
                    if(data.value === event.target.value)
                        data.checked = !data.checked
                    return data
                })
            

                this.setState({
                    estados : selectedEstados
                })

			}

			// --------------------------------------
            // Toggle CheckBoox State
            // --------------------------------------
			
			onCheckBoxMarcasChange  = (event)=> {
                const {marcas}  = this.state;
                let selectedMarcas = marcas.map((data)=> {
                    if(data.value === event.target.value)
                        data.checked = !data.checked
                    return data
                })
            

                this.setState({
                    marcas : selectedMarcas
                })

			}




			// --------------------------------------
			// Get JSON Response and Format to 
			// React-select Type
			// --------------------------------------
			formatSelectValues(valuesArray) {
			    const data = valuesArray.map((valueItem) => {
			        let data = {
			            label: valueItem.nombre,
			            value: valueItem.id
			        }
			        return data;
			    })
			    return data;
			}

			// --------------------------------------
            // Get Ubicacion Value
            // --------------------------------------
            handleSelectUbicacionChange = (selectedEstado) => {
                this.loadMunicipios(selectedEstado)
                    .then((municipiosAnswer) => {
                        let municipios = municipiosAnswer.data;

                        this.setState({
                            selectedEstado: selectedEstado,
                            municipios: municipios,
                            // ismunicipiosLoaded: false
                        })
                    })
			}
			
			// --------------------------------------
            // Get Model Value
            // --------------------------------------
			handleSelectMunicipioChange = (selectedMunicipio) => {
			
			    this.setState({
			        selectedMunicipio: selectedMunicipio
			    })
			}

			 // --------------------------------------
            // Handle Marcas Select State
            // --------------------------------------
            handleSelectMarcaChange = (selectedMarca) => {

			    this.setState({
			        selectedMarca: selectedMarca
			    })
			}
			
			// --------------------------------------
            // Control Select Inputs
            // --------------------------------------
            onChangeStartSelect = (selectedOption) =>{
				// onChangeSelect(control, selectedOption) {
					console.log("TCL: onChangeSelect -> selectedOption", selectedOption)
					// console.log("TCL: onChangeSelect -> control", control)
					this.setState({
						startYear : selectedOption
					})   
				}



			// --------------------------------------
            // Control Select Inputs
            // --------------------------------------
            onChangeEndSelect = (selectedOption) =>{
				// onChangeSelect(control, selectedOption) {
					console.log("TCL: onChangeSelect -> selectedOption", selectedOption)
					this.setState({
						endYear : selectedOption
					})   
			}



			/* ==========================================================================
			** Call FIlter Methods From Parent
			** ========================================================================== */
				// --------------------------------------
				// Apply Ubication Filter
				// --------------------------------------
				filterByUbication = (event)=> {
					
					const activeEstados = this.getEstadosItems() ;
					
					this.props.filterByUbication(activeEstados)
				}


				// --------------------------------------
				// Apply Marca Filter
				// --------------------------------------
				filterByMarca = (event)=> {
					const activeMarcas = this.getMarcasItems() ;

					this.props.filterByMarca(activeMarcas);
				}

				// --------------------------------------
				// Apply Years Filter
				// --------------------------------------

				filterByYears = (event)=> {
					const {startYear, endYear} = this.state;

					this.props.filterByYears(startYear.value, endYear.value);
				}

	/* ==========================================================================
	 *  Render Methods
	 ========================================================================== */


		// --------------------------------------
		// Render Year Selects
		// --------------------------------------		
		renderYearSelects() {
			const {startYear, endYear}= this.state;
			// const startYearSelect = <SingleSelect  isClearable={false} isSearchable={true} options={this.getyearsArray()} name = {'startYearSelect'} value = {startYear}/>
			// const endYearSelect = <SingleSelect  isClearable={false} isSearchable={true} options={this.getyearsArray()} name = {'endYearSelect'} value = {endYear}/>

			const startYearSelect =  <Select
										className="basic-single"
										classNamePrefix="select"
										defaultValue = {startYear}
										isClearable={false}
										isSearchable={true}
										name = {'startYearSelect'}
										value={startYear}
										onChange={this.onChangeStartSelect}
										options={this.getyearsArray()} 
									/>

			const endYearSelect =  <Select
										className="basic-single"
										classNamePrefix="select"
										defaultValue = {endYear}
										isClearable={false}
										isSearchable={false}
										name = {'endYearSelect'}
										value={endYear}
										onChange={this.onChangeEndSelect}
										options={this.getyearsArray()} 
									/>

			return (
				
				<RangeSelect startSelect = {startYearSelect} endSelect = {endYearSelect}/>
			)
		}

		// --------------------------------------
		// Render Accordion
		// --------------------------------------
		RenderAccordion() {
			const {estados, municipios, marcas, selectedEstado, selectedMunicipio, selectedMarca} = this.state
			return  (
				<CustomAccordion isAccordion = {false}>
					<CustomAccordionItem accordionTitle = {"Ubicación"} expanded = {true}> 
						
						<div className="sr-filterItemsContainer">

							<div className = "sr-filterItemsContainerItem">
								<label htmlFor=""> Estado </label>	
								{/*<Select
									className="basic-single"
									classNamePrefix="select"
									defaultValue={{ value: 0, 'label': 'Selecciona el Estado' }}
									isClearable={false}
									isSearchable={true}
									id = {"estado"}
									inputId  = {"estado"}
									value={selectedEstado}
									options={this.formatSelectValues(estados)}
									name={'LocationSelect'}
									onChange={this.handleSelectUbicacionChange}
								/>*/}

								<OptionsBox options = {estados} onChange = {this.onCheckBoxEstadosChange} />
							</div>

							{/*<div className = "sr-filterItemsContainerItem">
								<label htmlFor=""> Ciudad </label>	
								<Select
									className="basic-single"
									classNamePrefix="select"
									defaultValue = {municipios[0]} 
									isClearable={false}
									isSearchable={true}
									name = {'municipio'}
									id = {"municipio"}
									inputId  = {"municipio"}
									value={selectedMunicipio}
									onChange={this.handleSelectMunicipioChange}
									options={this.formatSelectValues(municipios)}
								/>
							</div>*/}

							<div className="sr-FilterButtonContainer">
								<AppButton 
									buttonClass = "site-button" 
									buttonText = {'Aplicar'}
									onClick={this.filterByUbication}>
								</AppButton>
							</div>
						</div>


					</CustomAccordionItem>

					<CustomAccordionItem accordionTitle = {"Rango de Precios"} expanded = {true}>
					<div className="sr-filterItemsContainerItem">				
						<PriceSlider/>
						<div className="sr-FilterButtonContainer">
								<AppButton 
									buttonClass = "site-button" 
									buttonText = {'Aplicar'}
									onClick={this.filterByUbication}>
								</AppButton>
							</div>
						</div>		
					</CustomAccordionItem>

					<CustomAccordionItem accordionTitle = {"Marca"} expanded = {true}>
						<div className="sr-filterItemsContainerItem">
						<OptionsBox options = {marcas} onChange = {this.onCheckBoxMarcasChange} />
						{/*	<Select
								className="basic-single"
								classNamePrefix="select"
								defaultValue={marcas[0]}
								isClearable={false}
								isSearchable={true}
								name={'marcaSelect'}
								id = {"marca"}
								inputId  = {"marca"}
								value={selectedMarca}
								onChange={this.handleSelectMarcaChange}
								options={this.formatSelectValues(marcas)}
							/>
						*/}							
						</div>

							<div className="sr-FilterButtonContainer">
								<AppButton 
									buttonClass = "site-button" 
									buttonText = {'Aplicar'}
									onClick={this.filterByMarca}>
								</AppButton>
							
							</div>

						
					</CustomAccordionItem>

					<CustomAccordionItem accordionTitle = {"Año"} expanded = {true}>
						<div className="sr-filterItemsContainerItem">
							{this.renderYearSelects()}
						</div>
						
						<div className="sr-FilterButtonContainer">
								<AppButton 
									buttonClass = "site-button" 
									buttonText = {'Aplicar'}
									onClick={this.filterByYears}>
								</AppButton>
						</div>
						
					</CustomAccordionItem>
				</CustomAccordion>
			)
			
		}


        // --------------------------------------
        // Render SideBar
        // --------------------------------------
        renderSideBar() {
			const {sideBarTitle} =  this.props;
            return (
                <Fragment>
                    <aside  className="side-bar">
                            <div className="widget recent-posts-entry">
								<h4 className="widget-title">{sideBarTitle}</h4>
								<div className="dlab-accordion advanced-search toggle" id="accordion1">

									{this.RenderAccordion()}

						
								</div>	
							</div>
                    </aside>
                </Fragment>
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderSideBar();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    SideBar.propTypes = {
    	sideBarTitle: PropTypes.string
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default SideBar;
