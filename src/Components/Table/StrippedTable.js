/* ==========================================================================
 * Stripped Table Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
import React, { Component, Fragment }  from 'react'
import PropTypes from 'prop-types'


// --------------------------------------
// Format Data
// --------------------------------------
	const formatDate = (date) => {
        const newDate = new Date(date);
        const formatedDate = newDate.toLocaleDateString();
        return formatedDate;
    }

// --------------------------------------
// Create Component
// --------------------------------------
    const StrippedTable = (props) => {

		const {data} = props;
		const dataArray = [{...data}];
		console.log('TCL: StrippedTable -> dataArray', dataArray)
		console.log('TCL: StrippedTable -> props', props)

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>

                <div class="icon-bx-wraper bx-style-1 m-b30">
							<ul class="table-dl table-col2 clearfix ">
								<li class="table-head">
									<div class="leftview compare-list-1">Informaci&oacute;n del Vehiculo</div>
									<div class="rightview compare-list-2"> Detalles </div>
									
								</li>

								<li>
									<div class="leftview compare-list-1">Combustible</div>
									<div class="rightview compare-list-2"> {data.tipo_combustible}	</div>
						
								</li>
								<li>
									<div class="leftview compare-list-1">Kilometraje</div>
									<div class="rightview compare-list-2"> {data.kilometraje} km</div>
									
								</li>
								<li>
									<div class="leftview compare-list-1">transmision </div>
									<div class="rightview compare-list-2"> {data.transmision} </div>
									
								</li>
								<li>
									<div class="leftview compare-list-1">Color</div>
									<div class="rightview compare-list-2"> {data.color}	</div>
									
								</li>
								<li>
									<div class="leftview compare-list-1">Equipamento</div>
									<div class="rightview compare-list-2"> {data.equipamento} </div>
									
								</li>
								<li>
									<div class="leftview compare-list-1">Vestiduras</div>
									<div class="rightview compare-list-2"> {data.vestiduras}</div>
									
								</li>
								<li>
									<div class="leftview compare-list-1">Publicado Desde</div>
									<div class="rightview compare-list-2"> {formatDate(data.created_at)}</div>
								
								</li>
							</ul>
						</div>

            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    StrippedTable.propTypes = {
        prop: PropTypes
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default StrippedTable; 