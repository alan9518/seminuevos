/* ==========================================================================
** Contact Form Component Layout
** 31/03/2019
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import {AppButton } from '../../../Components'
    import PropTypes from 'prop-types';
// --------------------------------------
// Create Functional Component
// --------------------------------------
    const ContactForm = (props) => {
        const {precio, titulo, name, mail, telephone, message} = props;
        return (
            
            <div className="car-dl-info m-b30">
                <div className="price">
                    <h2 className="m-t0 m-b5">{`Precio $ ${precio}`}</h2>
                    <span>{titulo}</span>	
                </div>			
                <form>
                    <h3 className="m-t0 m-b5">Contacto Vendedor</h3>
                    <div className="sr-formContainer">
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="sr-ProjectName" className="grey-text">Tu Nombre</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control sm-searchInput"
                                        placeholder="Tu Nombre"
                                        onChange={props.handleInputChange}
                                        id={"nombre"}
                                        value={name}
                                        name={"name"} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="sr-ProjectName" className="grey-text">Tu N&uacute;mero de Celular</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control sm-searchInput"
                                        placeholder="Tu Número de Celular"
                                        onChange={props.handleInputChange}
                                        id={"telephone"}
                                        value={telephone}
                                        name={"telephone"} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="sr-ProjectName" className="grey-text">Tu Correo</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control sm-searchInput"
                                        placeholder="Tu Correo"
                                        onChange={props.handleInputChange}
                                        id={"mail"}
                                        value={mail}
                                        name={"mail"} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="sr-ProjectName" className="grey-text">Tu Mensaje</label>
                                <div className="input-group">
                                    <textarea 
                                        name="message" 
                                        id="message"  
                                        value = {message} 
                                        className = "form-control" 
                                        cols="30" 
                                        rows="10" 
                                        onChange = {props.handleInputChange}
                                        style = {{width:'100%'}}>
                                    </textarea>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix">
                        
                            <AppButton
                                buttonClass={"site-button button-lg btn-block sr-bigButton"}    
                                buttonText = {"Contactar al Vendedor"}
                                onClick = {props.onClick}/>

                            <AppButton
                                buttonClass={"site-button button-lg btn-block sr-bigButton"}    
                                buttonText = {"Cancelar"}
                                onClick = {props.cancel}/>
                        </div>
                    </div>
                
                </form>
        </div>


          
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    ContactForm.propTypes = {
        props: PropTypes
    };
// --------------------------------------
// Export Component
// --------------------------------------
    export default ContactForm;