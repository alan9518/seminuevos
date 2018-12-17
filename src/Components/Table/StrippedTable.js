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
// Create Component
// --------------------------------------
    const StrippedTable = () => {


        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>

                <div class="icon-bx-wraper bx-style-1 m-b30">
							<ul class="table-dl table-col4 clearfix ">
								<li class="table-head">
									<div class="leftview compare-list-1">Overview</div>
									<div class="rightview compare-list-2"> Plus Hyundai EON </div>
									<div class="rightview compare-list-3"> Hyundai EON LPG </div>
									<div class="rightview compare-list-4"> Hyundai EON </div>
								</li>
								<li>
									<div class="leftview compare-list-1">Fuel Type</div>
									<div class="rightview compare-list-2"> Diesel 	</div>
									<div class="rightview compare-list-3"> Diesel</div>
									<div class="rightview compare-list-4"> Petrol</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Mileage (ARAI) </div>
									<div class="rightview compare-list-2"> 17.2kmpl</div>
									<div class="rightview compare-list-3"> 18.53kmpl</div>
									<div class="rightview compare-list-4"> 18.9kmpl</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Mileage City </div>
									<div class="rightview compare-list-2"> —</div>
									<div class="rightview compare-list-3"> —</div>
									<div class="rightview compare-list-4"> —</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Available Colors</div>
									<div class="rightview compare-list-2"> Yes	</div>
									<div class="rightview compare-list-3"> Yes</div>
									<div class="rightview compare-list-4"> Yes</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Fuel Tank Capacity</div>
									<div class="rightview compare-list-2"> 58Litres</div>
									<div class="rightview compare-list-3"> 75Litres</div>
									<div class="rightview compare-list-4"> 55Litres</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Seating Capacity</div>
									<div class="rightview compare-list-2"> 3</div>
									<div class="rightview compare-list-3"> 4</div>
									<div class="rightview compare-list-4"> 6</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Transmission Type</div>
									<div class="rightview compare-list-2"> Automatic</div>
									<div class="rightview compare-list-3"> Automatic</div>
									<div class="rightview compare-list-4"> Manual</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Engine Displacement (cc)</div>
									<div class="rightview compare-list-2"> 1968</div>
									<div class="rightview compare-list-3"> 1968</div>
									<div class="rightview compare-list-4"> 1997</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Offers & Discount</div>
									<div class="rightview compare-list-2"> Not Available</div>
									<div class="rightview compare-list-3"> Not Available</div>
									<div class="rightview compare-list-4"> 3 Offers</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Finance Available (EMI)</div>
									<div class="rightview compare-list-2"> $ 1,80,352</div>
									<div class="rightview compare-list-3"> $ 2,30,597</div>
									<div class="rightview compare-list-4"> $ 1,50,592</div>
								</li>
								<li>
									<div class="leftview compare-list-1">Service Cost</div>
									<div class="rightview compare-list-2"> —</div>
									<div class="rightview compare-list-3"> —</div>
									<div class="rightview compare-list-4"> —</div>
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