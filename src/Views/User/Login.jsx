/* ==========================================================================
 * Login View Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import { ProjectLink, SubHeader, Breadcumbs, CheckBoxes, IconsGrid } from '../../Components/';
    import {Endpoints} from '../../services/endpoints';
    import bgImage from '../../images/header/loginBG.jpg';
    import {Redirect} from 'react-router-dom';
    import axios from 'axios';
    import PropTypes from "prop-types";
    import Alert from 'react-s-alert';
    import 'react-s-alert/dist/s-alert-default.css';
    import 'react-s-alert/dist/s-alert-css-effects/slide.css';


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
            const context = this;
            
            const {isAgency, createNewUser} = this.state;
			console.log('TCL: Login -> onSubmit -> createNewUser', createNewUser)
            let userAction = null;

            if(!createNewUser) {
                userAction =  !isAgency? await this.loginUser() : await this.loginAgency();
                // context.successLogin(userAction);
                 if(userAction.error) {
                    context.setState({errorLogin : true , loadingLogin : false})
                    context.createErrorAlert('Error al iniciar sesión. Revisa tus creadenciales e intentalo de nuevo    ')
                }
                    
                else    
                    context.successLogin(userAction);
            }
                
			else
                userAction = await this.registerUser();
                
                
                console.log("TCL: Login -> onSubmit -> userAction", userAction)
                

            // if(userAction.error) {
            //     context.setState({errorLogin : true , loadingLogin : false})
            //     context.createErrorAlert('Error al iniciar sesión. Revisa tus creadenciales e intentalo de nuevo    ')
            // }
                
            // else    
            //     context.successLogin(userAction);
                
        }

        // --------------------------------------
        // Save user Session and Redirect
        // --------------------------------------
        successLogin(userData) {
            const {emailUsuario} = this.state;
            let sessionData = {...userData, emailUsuario  };
			// console.log("TCL: Login -> successLogin -> sessionData", sessionData)
            
            sessionStorage.setItem('userData',JSON.stringify(sessionData));
            // console.log('TCL: Login -> successLogin -> sessionStorage', sessionStorage)
            
            this.setState({errorLogin : false,  loadingLogin : false, redirectUser : true })
        }


    
    /* ==========================================================================
     *  DB Connection
     ========================================================================== */
        
        /** --------------------------------------
        // User login
        // @param {correo_usuario <String>}
        // @param {pass_usuario <String>}
        // --------------------------------------*/
        async loginUser () {
            const {emailUsuario, passUsuario} = this.state;
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    correo_usuario : emailUsuario,
                    pass_usuario : passUsuario
                }  
            }
            const loginPromise =  await axios.get(Endpoints.loginUser,settings);
            // const loginData =  await loginPromise.data;
            const loginData =  await {...loginPromise.data, tipoUsuario : 'usuario'};
			console.log("TCL: Login -> loginUser -> loginData", loginData)
            return loginData
        }


        /** --------------------------------------
        // User login
        // @param {correo_usuario <String>}
        // @param {pass_usuario <String>}
        // --------------------------------------*/
        async loginAgency () {
            const {emailUsuario, passUsuario, agencyName} = this.state;
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    correo_usuario : emailUsuario,
                    pass_usuario : passUsuario,
                    nombre_agencia : agencyName
                }  
            }
            const loginPromise =  await axios.get(Endpoints.loginAgency,settings);
            const loginData =  await {...loginPromise.data, tipoUsuario : 'agencia'};
            return {...loginData};
        }
    

        /** --------------------------------------
        // User Register
        // @param {correo_usuario <String>}
        // @param {pass_usuario <String>}
        // --------------------------------------*/
        async registerUser() {
            const {nameUsuario, lastNameUsuario, phoneUsuario,  emailUsuario, passUsuario} = this.state;
            const context = this;
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    correo_usuario : emailUsuario,
                    pass_usuario : passUsuario,
                    nombre_usuario : nameUsuario,
                    apellidos_usuario : lastNameUsuario,
                    tel_usuario : phoneUsuario,
                }  
            }

            const data = new FormData()
                data.set('nombre_usuario' , nameUsuario)
                data.set('apellidos_usuario' , lastNameUsuario)
                data.set('correo_usuario' , emailUsuario)
                data.set('pass_usuario' , passUsuario)
                data.set('tel_usuario' , phoneUsuario)


            axios({
                    method: 'post',
                    url: Endpoints.registerUser,
                    data: data,
                    config: { headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        }}
                    })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                        context.createSuccessAlert('Usuario creado')
                        context.successLogin(response);
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                        context.createErrorAlert('Hubo un problema al crear tu ususario. Por avor intentalo de nuevo');
            });

        
        }


        /** --------------------------------------
        // User Register
        // @param {correo_usuario <String>}
        // @param {pass_usuario <String>}
        // --------------------------------------*/
        async registerAgency() {
            const {nameUsuario, lastNameUsuario, phoneUsuario, agencyName, isAgency, emailUsuario, passUsuario} = this.state;
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    correo_usuario : emailUsuario,
                    pass_usuario : passUsuario,
                    nombre_usuario : nameUsuario,
                    apellidos_usuario : lastNameUsuario,
                    tel_usuario : phoneUsuario,
                }  
            }
            const registerPromise =  await axios.post(Endpoints.registerUser,settings);
            const registerData =  await registerPromise.data;
            return registerData;
        }

    /* ==========================================================================
     *  Render Methods
     ========================================================================== */

        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader 
                    headerTtitle={'Iniciar Sesión'} 
                    backgroundImage = {bgImage}/>
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs />
        }

        // --------------------------------------
        // Render Login Form
        // --------------------------------------
        renderLoginForm() {
            const { emailUsuario, passUsuario, createNewUser, isAgency, agencyName } = this.state;
        
            const formTitle = !createNewUser ? "Iniciar Sesión" : "Crear Cuenta";
            const buttonText = !createNewUser ? "Ingresar" : "Crear Cuenta";
            return (

                <Fragment>
                    <div className="p-a30 bg-gray clearfix m-b30 ">
                        <h2>{formTitle}</h2>
                        <div className="dzFormMsg"></div>
                        <form onSubmit = {this.onSubmit}>
                            
                            


                            <div className="row">

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <CheckBoxes 
                                                id = {"isAgency"}  
                                                label = {"¿ Es Agencia ?"}  
                                                value = {isAgency} 
                                                checked = {isAgency}
                                                onChange = {this.registrarAgencia}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {createNewUser && this.renderRegisterForm()}

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input
                                                name={"emailUsuario"}
                                                type="email"
                                                required
                                                className=" form-control"
                                                placeholder="E-mail"
                                                value={emailUsuario}
                                                onChange={this.handleInputsChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {
                                // Login como Agencia
                                isAgency && !createNewUser &&  
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input
                                                    name={"agencyName"}
                                                    type="text"
                                                    required
                                                    className=" form-control"
                                                    placeholder="Nombre Agencia"
                                                    value={agencyName}
                                                    onChange={this.handleInputsChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input
                                                name={"passUsuario"}
                                                type="password"
                                                required
                                                className=" form-control"
                                                placeholder="Contraseña"
                                                value={passUsuario}
                                                onChange={this.handleInputsChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        


                            <div className="row">
                                <div className="col-md-12">
                                    <button name="submit" type="submit" value="Submit" className="site-button ">
                                        <span>{buttonText}</span>
                                    </button>
                                </div>

                                <div className="input-group text-center">
                                    {/* Space For Extra Content */}
                                    <span className="site-button-link ms-subLink sr-toggleSpan" onClick={this.toggleCreateNewUser} >
                                        {!createNewUser ? 'Crear Cuenta' : 'Iniciar Sesión'}
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </Fragment>


            )
        }

        // --------------------------------------
        // Render Register Form
        // --------------------------------------
        renderRegisterForm() {
            const {nameUsuario, lastNameUsuario, phoneUsuario, agencyName, isAgency, createNewUser } = this.state;
            

            return (
                <Fragment>
                    <div className="row">

                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        name={"nameUsuario"}
                                        type="text"
                                        required
                                        className=" form-control"
                                        placeholder="Nombre "
                                        value={nameUsuario}
                                        onChange={this.handleInputsChange}
                                    />
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        name={"lastNameUsuario"}
                                        type="text"
                                        required
                                        className=" form-control"
                                        placeholder="Apellidos "
                                        value={lastNameUsuario}
                                        onChange={this.handleInputsChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        name={"phoneUsuario"}
                                        type="text"
                                        required
                                        className=" form-control"
                                        placeholder="Teléfono "
                                        value={phoneUsuario}
                                        onChange={this.handleInputsChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        // Login como Agencia
                        isAgency && createNewUser &&  
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input
                                            name={"agencyName"}
                                            type="text"
                                            required
                                            className=" form-control"
                                            placeholder="Nombre Agencia"
                                            value={agencyName}
                                            onChange={this.handleInputsChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </Fragment>
            )


        }

        // --------------------------------------
        // Render Error Message
        // --------------------------------------
        renderErrorLogin() {
            return 
        }


        // --------------------------------------
        // Render Login 
        // Redirect the User if is Alredy Logged In
        // --------------------------------------
        renderLoginView() {
            const { redirectUser, errorLogin } = this.state;

            if (redirectUser || sessionStorage.getItem('userData')){
                    return (<Redirect to={'/'}/>)
            }

            return (
                <Fragment>
                    <div className="page-content">
                        {this.renderSubHeader()}

                        {/*{this.renderBreadcumbs()}*/}

                        <div className="section-full content-inner bg-white contact-style-1">
                            <div className="container">

                                <div className="row">

                                    <div className="col-md-6 col-md-offset-3 col-sm-12 col-sm-col-sm-offset-0">
                                        {/* !errorLogin ? this.renderLoginForm() : this.renderErrorLogin()*/}
                                        {  this.renderLoginForm() }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }


            // --------------------------------------
            // Show Error Message
            // --------------------------------------
            createErrorAlert = (message) => {
                
                Alert.error(message, {
                    position: 'top',
                    effect : 'slide',
                    timeout : 2000
                });
            }

            // --------------------------------------
            // Top Alert
            // --------------------------------------
            createErrorAlertTop= (message) => {
                Alert.error(message, {
                    position: 'top',
                    effect : 'slide',
                    timeout: 2000
                });
            }


            // --------------------------------------
            // Show Sucess Message
            // --------------------------------------
            createSuccessAlert = (message) => {
                
                Alert.info(message, {
                    position: 'top',
                    effect : 'slide',
                    timeout : 2000
                
                });
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


