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
            }

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
					estados : estadosData,
					marcas : marcasData,
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
                const loadMarcasPromise = await axios.get(Endpoints.getAllMarcas, { settings });
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
                const loadEstadosPromise = await axios.get(Endpoints.getAllEstados, { settings });
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

			// --------------------------------------
			// Get JSON Response and Format to 
			// React-select Type
			// --------------------------------------
			formatSelectValues(valuesAray) {
			    const data = valuesAray.map((valueItem) => {
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



			/* ==========================================================================
			** Call FIlter Methods From Parent
			** ========================================================================== */
			// --------------------------------------
			// Apply Ubication Filter
			// --------------------------------------
			filterByUbication = (event)=> {
				const {selectedEstado, selectedMunicipio} = this.state;
				// console.log("TCL: SideBar -> filterByUbication -> selectedMunicipio", selectedMunicipio)
				// console.log("TCL: SideBar -> filterByUbication -> selectedEstado", selectedEstado)

				this.props.filterByUbication(selectedEstado, selectedMunicipio)
			}


			// --------------------------------------
			// Apply Marca Filter
			// --------------------------------------
			filterByMarca = (event)=> {
				const {selectedMarca} = this.state;

				this.props.filterByMarca(selectedMarca);
			}

	/* ==========================================================================
	 *  Render Methods
	 ========================================================================== */


		// --------------------------------------
		// Render Year Selects
		// --------------------------------------		
		renderYearSelects() {
			const startYearSelect = <SingleSelect  isClearable={false} isSearchable={true} options={this.getyearsArray()} name = {'startYearSelect'}/>
			const endYearSelect = <SingleSelect  isClearable={false} isSearchable={true} options={this.getyearsArray()} name = {'endYearSelect'}/>
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
								<Select
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
								/>
							</div>

							<div className = "sr-filterItemsContainerItem">
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
							</div>

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
							<Select
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
									onClick={this.filterByUbication}>
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
