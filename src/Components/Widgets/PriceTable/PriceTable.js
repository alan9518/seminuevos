/* ==========================================================================
** Price table Layout Component
** 24/02/2019

** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
	import React from 'react';
	import {AppButton} from '../../../Components'
	// import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
	import './styles.css'

	import PropTypes from 'prop-types';



// --------------------------------------
// Render Tab Conten Items
// --------------------------------------
const renderTabContent = (featuresArray) => {




}


// --------------------------------------
// Create Functional Component
// --------------------------------------
const PriceTable = (props) => {

	const { pricesData, onCardClick } = props;
	// console.log('TCL: PriceTable -> pricesData', pricesData)

	return (

		<div className=" pricing-wrapper clearfix ">
		{
				pricesData.map((priceItem, index)=> {
					return (
						<div 
							className = {`pricing-table ${priceItem.recomendado && 'recommended'} col-lg-4 col-md-12`}  
							onClick = {onCardClick}
							key = {index}
							id = {priceItem.id}>
							<h3 className="pricing-title">{priceItem.nombre}</h3>
							<div className="price">  {priceItem.precio === 'Gratis' ? 'Grátis' : `$ ${priceItem.precio}.00`} </div>


							<ul className="table-list">
							

								<li> {priceItem.disponibilidad} </li>
								<li> {priceItem.fotos} </li>
								<li> {priceItem.duracion} </li>
								<li> {priceItem.posicionamiento} </li>
								
							</ul>

							<div className="table-buy">
							<AppButton
                                        buttonClass={"pricing-action site-button btn-block "}
                                        buttonText={'Elegir'}
                                        onClick={onCardClick} />
					{/*<a href="#" className="pricing-action site-button">Elegir</a>*/}
							</div>
						</div>
					)
				})
		}

		{/*	<div className="pricing-table recommended">
				<h3 className="pricing-title">Premium</h3>
				<div className="price">$100<sup>/ mes</sup></div>

				<ul className="table-list">
					<li>35 GB <span>De almacenamiento</span></li>
					<li>5 Dominios <span>incluidos</span></li>
					<li>100 GB <span>De transferencia mensual</span></li>
					<li>Base de datos <span className="unlimited">ilimitadas</span></li>
					<li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
					<li>CPanel <span>incluido</span></li>
				</ul>

				<div className="table-buy">
					<p>$100<sup>/ mes</sup></p>
					<a href="#" className="pricing-action">Comprar</a>
				</div>
			</div>

			<div className="pricing-table">
				<h3 className="pricing-title">Ultimate</h3>
				<div className="price">$200<sup>/ mes</sup></div>

				<ul className="table-list">
					<li>100 GB <span>De almacenamiento</span></li>
					<li>8 Dominios <span>incluidos</span></li>
					<li>200 GB <span>De transferencia mensual</span></li>
					<li>Base de datos <span className="unlimited">ilimitadas</span></li>
					<li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
					<li>CPanel <span>incluido</span></li>
				</ul>

				<div className="table-buy">
					<p>$200<sup>/ mes</sup></p>
					<a href="#" className="pricing-action">Comprar</a>
				</div>
			</div>*/}
		</div>

	)

}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
PriceTable.propTypes = {
	props: PropTypes
};
// --------------------------------------
// Export Component
// --------------------------------------
export default PriceTable;

