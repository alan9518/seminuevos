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
            const {id_anuncio, id, titulo, precio, imagen_destacada, shortDescription, year , kilometraje, transmision, equipamento } = vehicle;
			console.log("TCL: ResultItem -> equipamento", equipamento)
            // console.log('meta', meta);



            const renderEquipamento = (equipamento)=> {
                const equipamentoArray = equipamento.split(',');
				// console.log("TCL: renderEquipamento -> equipamentoArray", equipamentoArray)
                return equipamentoArray.map((equipo)=> {
                    return <span> {equipo}  </span>
                })
            }

            const setImagenDestacada = (imagen_destacada) => {
                if(imagen_destacada.indexOf('http') >=0 ) 
                    return imagen_destacada
                else{
                    let imagenNameArray =  imagen_destacada.split('../');
                    // console.log("TCL: setImagenDestacada -> imagenNameArray", imagenNameArray)
                    let imagenRelativeRouteName = imagenNameArray[2];
                    let imageRoute = `http://localhost:8080/SR_seminuevos/backendFinal/${imagenRelativeRouteName}`;
					// console.log("TCL: setImagenDestacada -> imageRoute", imageRoute)
                    // console.log("TCL: setImagenDestacada -> imagenRelativeRouteName", imagenRelativeRouteName)
                    
                    return imageRoute
                }
            }

            
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (

           
            <Fragment> 
                <div className = "blog-post blog-md clearfix date-style-2 list-view m-b30">
                    <div className = "dlab-post-media dlab-img-effect zoom-slow"> 
                        <ProjectLink route  = {`/anuncio/${id_anuncio}`}>
                            <img src= {setImagenDestacada(imagen_destacada)}  alt=""/>
                        </ProjectLink>
                    </div>
                    <div className = "dlab-post-info">
                        <div className = "dlab-post-title ">
                            <h3 className = "post-title">
                            <ProjectLink route  = {`/anuncio/${id_anuncio}`}>{titulo} </ProjectLink>
                            </h3>
                        </div>
                        <div className = "dlab-post-text">
                            <p>
                                {shortDescription}
                            </p>
                        </div>
                        <div className = "dlab-post-readmore"> 
                            <h2 className = "m-a0 pull-left m-r15 open-sans">$ {precio} </h2>
                            <ProjectLink route  = {`/anuncio/${id_anuncio}`}>
                                <button  className = "site-button" >Detalles </button> 
                            </ProjectLink>
                            
                        </div>
                        <div className = "dlab-post-tags">
                            <div className = "post-tags"> 
                                <span >{kilometraje }Kms</span> 
                                <span >{year}</span> 
                                {renderEquipamento(equipamento)}
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