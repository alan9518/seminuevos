/* ==========================================================================
 * SideBar Layout for Results View 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
	import {CustomAccordion, CustomAccordionItem, SingleSelect, PriceSlider, OptionsBox, RangeSelect} from '../../Components'
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
                estados : [
                    {value : null, label : 'Selecciona el Estado'},
                    {value : 'Autos', label : 'Autos'},
                    {value : 'Motos', label : 'Motos'},
                    {value : 'Clasicos', label : 'Clásicos'}
				],
				marcas : [
					{value : 'Carrera', label : 'Carrera'},
                    {value : 'Boxter', label : 'Boxter'},
					{value : '3-Series', label : '3-Series'},
					{value : 'Cayenne', label : 'Cayenne'},
					{value : 'F-Type', label : 'F-Type'}
				]
            }

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
			return  (
				<CustomAccordion isAccordion = {false}>
					<CustomAccordionItem accordionTitle = {"Ciudad"} expanded = {true}> 
						<SingleSelect 
							isClearable={false}
							isSearchable={true}
							options={this.state.estados}
							name = {'stateSelect'}
						/>
					</CustomAccordionItem>

					<CustomAccordionItem accordionTitle = {"Rango de Precios"} expanded = {true}>
						
						<PriceSlider/>
					</CustomAccordionItem>

					<CustomAccordionItem accordionTitle = {"Marca"} expanded = {true}>
							<SingleSelect 
									isClearable={false}
									isSearchable={true}
									options={this.state.marcas}
									name = {'brandSelect'}
								/>
						<OptionsBox options = {this.state.marcas}/>
					</CustomAccordionItem>

					<CustomAccordionItem accordionTitle = {"Año"} expanded = {true}>
						{this.renderYearSelects()}
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
