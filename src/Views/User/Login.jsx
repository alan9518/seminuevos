/* ==========================================================================
 * Login View Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */
// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import { ProjectLink, SubHeader, Breadcumbs, CheckBoxes } from '../../Components/'
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
            agencyName : ''

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
    // --------------------------------------
    onSubmit = (event)=> {
        event.preventDefault();
		console.log('TCL: Login -> onSubmit -> this.state', this.state)
    }

    
    /* ==========================================================================
     *  Render Methods
     ========================================================================== */

    // --------------------------------------
    // Render SubHeader
    // --------------------------------------
    renderSubHeader() {
        return <SubHeader headerTtitle={'Iniciar Sesión'} />
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
		console.log('TCL: Login -> renderLoginForm -> createNewUser', createNewUser)
		console.log('TCL: Login -> renderLoginForm -> isAgency', isAgency)
        const formTitle = "Iniciar Sesión";
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

                        {createNewUser && this.renderRegisterForm()}


                        <div className="row">
                            <div className="col-md-12">
                                <button name="submit" type="submit" value="Submit" className="site-button ">
                                    <span>Ingresar</span>
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
    // Render Login 
    // --------------------------------------
    renderLoginView() {
        const { createNewUser } = this.state;
        return (
            <Fragment>
                <div className="page-content">
                    {this.renderSubHeader()}

                    {this.renderBreadcumbs()}

                    <div className="section-full content-inner bg-white contact-style-1">
                        <div className="container">

                            <div className="row">

                                <div className="col-md-6 col-md-offset-3 col-sm-12 col-sm-col-sm-offset-0">
                                    {this.renderLoginForm()}
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


