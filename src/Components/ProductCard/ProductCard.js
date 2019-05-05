/* ==========================================================================
 * Product Card Component 
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */

 // --------------------------------------
 // Import Dependences
 // --------------------------------------
    import React, { Component, Fragment }  from 'react';
    import {ProjectLink, Clasico, Destacado} from '../../Components/'
    import PropTypes from 'prop-types'
    

 // --------------------------------------
 // Create Component
 // --------------------------------------
    const ProductCard = (props) => {
	
        // <img src= {imagen_destacada} alt = {titulo} style = {{maxHeight : 240}}
    
        const {titulo,id_anuncio,imagen_destacada, precio,year, transmision, kilometraje, tipo_anuncio} = props.vehicle;

        const isFeatured = tipo_anuncio === 'premium' ? true : false;
        const isClasico = tipo_anuncio === 'clasico' ? true : false;


        const setImagenDestacada = (imagen_destacada) => {
            if(imagen_destacada.indexOf('http') >=0 ) 
                return imagen_destacada
            else{
                let imagenNameArray =  imagen_destacada.split('../');
               
                let imagenRelativeRouteName = imagenNameArray[2];
                let imageRoute = `http://localhost:8080/SR_seminuevos/backendFinal/${imagenRelativeRouteName}`;
            
                return imageRoute
            }
        }
        
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="dlab-feed-list">
                    {isFeatured && <Destacado grid = {true}/>  }
                    {isClasico &&  <Clasico grid = {true}/>}
                    <div className="dlab-media"> 
                        <ProjectLink route  = {`/anuncio/${id_anuncio}`}>
                        
                            <img src = {setImagenDestacada(imagen_destacada)}  alt = {titulo} /> 
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