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
            const {id, title, price, img, shortDescription, year ,meta } = vehicle;
            console.log('meta', meta);
            
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment> 
                <div className = "blog-post blog-md clearfix date-style-2 list-view m-b30">
                    <div className = "dlab-post-media dlab-img-effect zoom-slow"> 
                        <ProjectLink route  = {`vehiculo/${id}`}>
                            <img src= {img}  alt=""/>
                        </ProjectLink>
                    </div>
                    <div className = "dlab-post-info">
                        <div className = "dlab-post-title ">
                            <h3 className = "post-title">
                                <a href="car-details-overview.html">{title}</a>
                            </h3>
                        </div>
                        <div className = "dlab-post-text">
                            <p>
                                {shortDescription}
                            </p>
                        </div>
                        <div className = "dlab-post-readmore"> 
                            <h2 className = "m-a0 pull-left m-r15 open-sans">$ {price} </h2>
                            <ProjectLink route  = {`vehiculo/${id}`}>
                                <button  className = "site-button" >Detalles </button> 
                            </ProjectLink>
                            
                        </div>
                        <div className = "dlab-post-tags">
                            <div className = "post-tags"> 

                                {meta.map((metaData)=> {
                                    console.log('metaData', metaData);
                                    return (
                                        <a href="#"> {metaData.value}  {metaData.label} </a>
                                    )
                                })}


                                {/* <a href="#">23.9 kmpl</a> 
                                <a href="#">624 cc</a> 
                                <a href="#">4 Seats</a> 
                                <a href="#">Manual</a>  */}
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