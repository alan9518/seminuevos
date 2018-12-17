/* ==========================================================================
 * Login View Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */
// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import {ProjectLink,SubHeader, Form, Breadcumbs} from '../../Components/'
    import PropTypes from "prop-types";

// --------------------------------------
// Create Component Class
// --------------------------------------
    class Login extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------   
        constructor(props) {
            super(props);
            this.state = {
                createNewUser : false,
                isAgency : false,
            }
        }
    
    /* ==========================================================================
     *  Handle State
     ========================================================================== */
        // --------------------------------------
        // Check for LoggedIn User
        // --------------------------------------
        componentWillMount() {
            console.log('props', this.props);
        }

        // --------------------------------------
        // Show New User Form
        // --------------------------------------
        createNewUser = (e)=> {
            e.preventDefault();
            this.setState({
                createNewUser : true
            })
        }

        registrarAgencia = (e)=> {
            this.setState({
                isAgency : true
            })
            console.log('change')
        }

    /* ==========================================================================
     *  Render Methods
     ========================================================================== */

        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader headerTtitle = {'Iniciar Sesión'} />
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs/>
        }

        // --------------------------------------
        // Render Login Form
        // --------------------------------------
        renderLoginForm() {
            const loginFields = [
                {inputName : 'ms-email', inputType : 'email', inputPlaceholder : 'E-mail' },
                {inputName : 'ms-pass', inputType : 'password', inputPlaceholder : 'Contraseña' }
            ]
            return (
                <Form formTitle = {'Iniciar Sesión'} formFields = {loginFields}>
                    <a className = "site-button-link ms-subLink" onClick = {this.createNewUser} href = "#"> 
                        Crear Cuenta
                    </a>
                </Form>
                
            )
        }

        // --------------------------------------
        // Render Register Form
        // --------------------------------------
        renderRegisterForm() {
            const {isAgency} = this.state;
            console.log('isAgency', isAgency);
            let registerFields = [
                {inputName : 'ms-agencia', inputType : 'checkbox', inputPlaceholder : '¿Es una Agencia?', value : isAgency, onClick : this.registrarAgencia},
                {inputName : 'ms-name', inputType : 'text', inputPlaceholder : 'Nombre (S)' },
                {inputName : 'ms-lastName', inputType : 'text', inputPlaceholder : 'Apellido (s)' },
                {inputName : 'ms-email', inputType : 'email', inputPlaceholder : 'E-mail' },
                {inputName : 'ms-phone', inputType : 'phone', inputPlaceholder : 'Tel' },
                {inputName : 'ms-pass', inputType : 'password', inputPlaceholder : 'Contraseña' }
                
            ]

            isAgency === true && registerFields.push({inputName : 'ms-agencyName', inputType : 'text', inputPlaceholder : 'Nombre de la Agencia' },)
            return (
                <Form formTitle = {'Crear Cuenta'} formFields = {registerFields}/>
            )
        }


        // --------------------------------------
        // Render Login 
        // --------------------------------------
        renderLogin() {
            const {createNewUser} = this.state;
            return (
                <Fragment>
                    <div className="page-content">
                        {this.renderSubHeader()}
                        
                        {this.renderBreadcumbs()}
                    
                        <div className="section-full content-inner bg-white contact-style-1">
                            <div className="container">
                                
                                <div className="row">

                                    <div className="col-md-6">
                                        { createNewUser === false ? this.renderLoginForm() : this.renderRegisterForm()}
                                    </div>

                                    <div className="col-md-6">
                                        <div class="section-head text-center head-1">
                                            
                                            <h3 class="h3 text-uppercase">Welcome To Car Dealer</h3>
                                            <div class="dlab-separator bg-gray-dark"></div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderLogin();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    Login.propTypes = {
        prop: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default Login;
