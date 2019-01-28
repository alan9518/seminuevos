/* ==========================================================================
 * Result Item List 
 * 12/12/2018
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
    const ResultItem = (props) => {
        console.log('props', props);
        // --------------------------------------
        // Extract Vehicle
        // --------------------------------------
            const {vehicle} =  props;
			console.log('TCL: ResultItem -> vehicle', vehicle)
            const {id, titulo, precio, imagen_destacada, shortDescription, year , kilometraje, transmision, equipamento } = vehicle;
            // console.log('meta', meta);
            
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment> 
                <div className = "blog-post blog-md clearfix date-style-2 list-view m-b30">
                    <div className = "dlab-post-media dlab-img-effect zoom-slow"> 
                        <ProjectLink route  = {`vehiculo/${id}`}>
                            <img src= {imagen_destacada}  alt=""/>
                        </ProjectLink>
                    </div>
                    <div className = "dlab-post-info">
                        <div className = "dlab-post-title ">
                            <h3 className = "post-title">
                                <a href="car-details-overview.html">{titulo}</a>
                            </h3>
                        </div>
                        <div className = "dlab-post-text">
                            <p>
                                {shortDescription}
                            </p>
                        </div>
                        <div className = "dlab-post-readmore"> 
                            <h2 className = "m-a0 pull-left m-r15 open-sans">$ {precio} </h2>
                            <ProjectLink route  = {`vehiculo/${id}`}>
                                <button  className = "site-button" >Detalles </button> 
                            </ProjectLink>
                            
                        </div>
                        <div className = "dlab-post-tags">
                            <div className = "post-tags"> 
                                <span >{kilometraje }Kms</span> 
                                <span >{year}</span> 
                                <span >{equipamento}</span> 
                                <span >{transmision}</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment> 
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // ResultItem.propTypes = {
    //     prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ResultItem; 