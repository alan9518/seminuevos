/* ==========================================================================
** User Home Page
** 07/02/2019
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import { ProjectLink, SubHeader, Breadcumbs, CheckBoxes, IconsGrid } from '../../Components/';
    import {Endpoints} from '../../services/endpoints';
    import bgImage from '../../images/header/miCuentaBG.jpg';
    import {Redirect} from 'react-router-dom';
    import axios from 'axios';
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
                createNewUser: false,
                isAgency: false,
                emailUsuario: '',
                passUsuario: '',
                nameUsuario : '',
                lastNameUsuario : '',
                phoneUsuario : '',
                agencyName : '',
                loadingLogin : false,
                errorLogin : false,
                redirectUser : false
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
            toggleCreateNewUser = (e) => {
                const {createNewUser} = this.state;
                e.preventDefault();
                this.setState({
                    createNewUser: !createNewUser
                })
            }

            // --------------------------------------
            // COntrol Inputs
            // --------------------------------------
            handleInputsChange = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }

            // --------------------------------------
            // Handle CheckBox State
            // --------------------------------------
            registrarAgencia = (e) => {
                const {isAgency} = this.state;
                this.setState({
                    isAgency: !isAgency
                })
            }


            // --------------------------------------
            // Submit Form
            // Set Agencia o User login
            // --------------------------------------
            onSubmit = async (event) => {
                event.preventDefault();
                this.setState({loadingLogin : true});
                
                const {isAgency, createNewUser} = this.state;
                console.log('TCL: Login -> onSubmit -> createNewUser', createNewUser)
                let userAction = null;

                if(!createNewUser)
                    userAction =  !isAgency? await this.loginUser() : await this.loginAgency();
                else
                    userAction = await this.registerUser();
                    

                if(userAction.error)
                    this.setState({errorLogin : true , loadingLogin : false})
                else    
                    this.successLogin(createNewUser);
                    
            }

            // --------------------------------------
            // Save user Session and Redirect
            // --------------------------------------
            successLogin(userData) {
                this.setState({errorLogin : false,  loadingLogin : false, redirectUser : false })
                sessionStorage.setItem('userData',JSON.stringify(userData));
                console.log('TCL: Login -> successLogin -> sessionStorage', sessionStorage)
            }



        /* ==========================================================================
        *  DB Connection
        ========================================================================== */
            
        
        /* ==========================================================================
        *  Render Methods
        ========================================================================== */

        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader 
                headerTtitle={'Bienvenido '}
                backgroundImage = {bgImage} />
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs />
        }



        // --------------------------------------
        // Render Login 
        // Redirect the User if is Alredy Logged In
        // --------------------------------------
        renderLoginView() {
            const { redirectUser, errorLogin } = this.state;

            return (
                <Fragment>
                <div className="page-content">
                    {this.renderSubHeader()}

                    {/*{this.renderBreadcumbs()}*/}

                    <div className="section-full content-inner bg-white contact-style-1">
                        <div className="container">

                            <div className="row">

                                <div className="col-md-6 col-md-offset-3 col-sm-12 col-sm-col-sm-offset-0">
                                    {/*{ !errorLogin ? this.renderLoginForm() : this.renderErrorLogin()}*/}
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
            return this.renderLoginView();
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


