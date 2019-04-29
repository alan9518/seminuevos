/* ==========================================================================
 * Result Item List 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Fragment }  from 'react';
    import {ProjectLink, Destacado} from '../../Components'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const ResultItem = (props) => {
        console.log('props', props);

        // --------------------------------------
        // Extract Vehicle
        // --------------------------------------
            const {vehicle, isFeatured, editVehicle} =  props;
			
            const {id_anuncio, id, titulo, precio, imagen_destacada, shortDescription, year , kilometraje, transmision, equipamento } = vehicle;
			
         


            const renderEquipamento = (equipamento)=> {
                const equipamentoArray = equipamento.split(',');
				
                return equipamentoArray.map((equipo)=> {
                    return <span> {equipo}  </span>
                })
            }

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


            const setShortDesc = (description) => {
                if(description.length > 80) 
                    return `${description.substr(0 , 80 )}...`
                else
                    return description
            }

            
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (

           
            <Fragment> 
                <div className = "blog-post blog-md clearfix date-style-2 list-view m-b30">
                    {isFeatured && <Destacado/>}
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
                                {setShortDesc(shortDescription)}
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