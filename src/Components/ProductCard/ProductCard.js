/* ==========================================================================
 * Product Card Component 
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */

 // --------------------------------------
 // Import Dependences
 // --------------------------------------
    import React, { Component, Fragment }  from 'react';
    import {ProjectLink} from '../../Components/'
    import PropTypes from 'prop-types'
    

 // --------------------------------------
 // Create Component
 // --------------------------------------
    const ProductCard = (props) => {

    
        const {titulo,id_anuncio,imagen_destacada, precio,year, transmision, kilometraje} = props.vehicle;
        
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="dlab-feed-list">
                    <div className="dlab-media"> 
                        <ProjectLink route  = {`/anuncio/${id_anuncio}`}>
                            <img src= {imagen_destacada} alt=""/> 
                        </ProjectLink>
                    	
                    </div>
                    <div className="dlab-info">
                    	<h4 className="dlab-title"> <ProjectLink route  = {`/anuncio/${id_anuncio}`}> {titulo} </ProjectLink></h4>
                    	<div className="dlab-separator bg-black"></div>
                        {/*<p className="dlab-price"><del>${precio}</del> <span className="text-primary">$26,598</span></p>*/}
                        
                        <p className="dlab-price"> <span className="text-primary">${precio}</span></p>
                    </div>
                    <div className="icon-box-btn text-center">
                    	<ul className="clearfix">
                    		<li>{year}</li>
                    		<li>{transmision}</li>
                    		<li>{kilometraje} kms </li>
                    	</ul>
                    </div>
                </div>
            </Fragment>
        )
    }
 
 
 // --------------------------------------
 // Define PropTypes
 // --------------------------------------
//  ProductCard.propTypes = {
//      prop: PropTypes
//  }
 
 
 // --------------------------------------
 // Export Component
 // --------------------------------------
    export default ProductCard; 