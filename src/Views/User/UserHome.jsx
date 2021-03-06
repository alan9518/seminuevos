/* ==========================================================================
** User Home Page
** 07/02/2019
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import { ResultsList, SubHeader, Breadcumbs, AppLoader, Pagination, ProjectLink } from '../../Components/';
    import {Endpoints} from '../../services/endpoints';
    import bgImage from '../../images/header/miCuentaBG.jpg';
    import axios from 'axios';
    import Alert from 'react-s-alert';
    import 'react-s-alert/dist/s-alert-default.css';
    import 'react-s-alert/dist/s-alert-css-effects/slide.css';
    import PropTypes from "prop-types";

// --------------------------------------
// Create Component Class
// --------------------------------------
    class UserHome extends Component {

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
                newPassUsuario :'',
                nameUsuario : '',
                lastNameUsuario : '',
                phoneUsuario : '',
                agencyName : '',
                loadingLogin : false,
                errorLogin : false,
                anunciosData : [],
                currentPage : 1,
                anunciosCount : 0,
                itemsPerPage : 6,
                isLoaded : false
            }
            // this.onSubmit = this.onSubmit.bind(this);
        }


         /* ==========================================================================
        ** Component Setup
        ** ========================================================================== */

         // --------------------------------------
            // Check for LoggedIn User
            // --------------------------------------
            async componentDidMount() {
                console.log('props', this.props);  
                this.loadAPI();
            }


            




        
        /* ==========================================================================
        ** API Connection
        ** ========================================================================== */

            // --------------------------------------
            // GET All Requests
            // --------------------------------------
            async loadAPI() {

                if (sessionStorage.getItem('userData')){
                    const userData =JSON.parse(sessionStorage.getItem('userData'))
                    
                    // Get User Data
                    const userAnunciosCount = await this.getUserAnunciosCount(userData.emailUsuario, userData.tipoUsuario);

                    const userDataPromise =  this.getUserData(userData.emailUsuario);
                    const userAnunciosPromise =  this.getUserAnuncios(1,userData.emailUsuario, userData.tipoUsuario);


                    const [userProfile, userAnuncios]  = await Promise.all([userDataPromise, userAnunciosPromise])
                    const userProfileData = userProfile.data;
                    const userAnunciosData = userAnuncios.data;

                  


                    // Set State
                    this.setState({
                        nameUsuario : userProfileData.nombre,
                        lastNameUsuario : userProfileData.apellidos,
                        emailUsuario: userProfileData.correo,
                        phoneUsuario : userProfileData.telefono,
                        anunciosCount: userAnunciosCount.counter,
                        anunciosData : userAnunciosData,
                        isLoaded : true
                    })
                }

           
              
            }


            /** --------------------------------------
            // Get User Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getUserData(userMail) {
				
                
                const loadUserDataPromise = await axios.get(Endpoints.getUserDetails, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                       correo_usuario : userMail
                    }
                });
                // const userData = await loadUserDataPromise.data;
            
                // return userData;
                return loadUserDataPromise;
            }



            
            /** --------------------------------------
            // Get User Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getUserAnuncios(page = 1, userMail, userType) {
                
                const {itemsPerPage, currentPage} = this.state;
               
                
                const loadUserDataPromise = await axios.get(Endpoints.getAnunciosByUser, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        searchCat : userType || JSON.parse(sessionStorage.getItem('userData')).tipoUsuario,
                        correo_usuario : userMail || JSON.parse(sessionStorage.getItem('userData')).emailUsuario,
                        page : page || currentPage,
                        items : itemsPerPage,
                    }
                });
                // const userData = await loadUserDataPromise.data;
            
                // return userData;
                return loadUserDataPromise;
            }


            /** --------------------------------------
            // Get Anuncios Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getUserAnunciosCount(userMail, userType) {

                const anunciosCountPromise = await axios.get(Endpoints.getUserAnunciosCount, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        searchCat : userType ,
                        correo_usuario : userMail ,
                       
                    }
                    
                });
                const anunciosCount = await anunciosCountPromise.data;
                // const ubicacionData = this.formatSelectValues(anunciosCount);

                return anunciosCount;
            }



        /* ==========================================================================
        *  Handle State
        ========================================================================== */
            
           
            
         
            // --------------------------------------
            // COntrol Inputs
            // --------------------------------------
            handleInputsChange = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }

         

            // --------------------------------------
            // Submit Form
            // Set Agencia o User login
            // --------------------------------------
            onSubmit = async (event) => {
                event.preventDefault();
                const {nameUsuario, lastNameUsuario, phoneUsuario,  emailUsuario, passUsuario, newPassUsuario} = this.state;
                const context = this;
                
                
                // Save User
                console.log('senind')        
                const userData = new FormData()
                    userData.set('id_usuario' , JSON.parse(sessionStorage.getItem('userData')).id)
                    userData.set('nombre_usuario' , nameUsuario)
                    userData.set('apellidos_usuario' , lastNameUsuario)
                    userData.set('correo_usuario' , emailUsuario)
                    userData.set('pass_usuario' , passUsuario)
                    userData.set('new_pass_usuario' , newPassUsuario)
                    userData.set('tel_usuario' , phoneUsuario)


                axios({
                    method: 'post',
                    url: Endpoints.editUser,
                    data: userData,
                    config: { headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        }}
                    })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                        context.createSuccessAlert('Datos Guardados')
                        // context.successLogin(response);
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                        context.createErrorAlert('Hubo un problema al guardar tus datos. Por avor intentalo de nuevo');
                    });

            }





            // --------------------------------------
            // Change Page
            // Load Prev/Next Page
            // --------------------------------------
            onPageitemCick = (event)=> {
                event.preventDefault();
                const {value} = event.target;
                let newPage = this.state.currentPage;
                
                // console.log("TCL: ListResults -> onPageitemCick -> value", value)
                
                // const newPage = value
                switch(value) {
                    case 'next' : newPage +=1; 
                        break;  
                    case 'prev' : newPage -=1; 
                        break;  
                    default : newPage = parseInt(value);
                }

                
                

                this.setState({loadingData : true})
                
                

                // Update Data
                // getAnunciosDataWithSearchParams

                this.getUserAnuncios(newPage)
                    .then((data)=> {
                        console.log("TCL: UserHome -> onPageitemCick -> data", data)
                        
                        this.setState({
                            currentPage : parseInt(newPage),
                            anunciosData : data.data,
                            loadingData : false,
                            itemsPerPage : 6
                        })
                    })
                
                
            }

       



            
        
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
            // Render Breadcumbs
            // --------------------------------------
            renderBreadcumbs() {
                return <Breadcumbs />
            }


            // --------------------------------------
            // Render Register Form
            // --------------------------------------
            renderDataForm() {
                const {nameUsuario, lastNameUsuario, phoneUsuario, passUsuario, newPassUsuario} = this.state;
                

                return (
                    <Fragment>
                        <div className="row">

                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="input-group">
                                    <label htmlFor="nameUsuario" > Nombre </label>
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
                                    <label htmlFor="lastNameUsuario" > Apellidos </label>
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
                                    <label htmlFor="phoneUsuario" > Tel&eacute;efono </label>
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

                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="input-group">
                                    <label htmlFor="passUsuario" > Contraseña </label>
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
                                <div className="form-group">
                                    <div className="input-group">
                                    <label htmlFor="passUsuario" >Nueva Contraseña </label>
                                        <input
                                            name={"newPassUsuario"}
                                            type="password"
                                            required
                                            className=" form-control"
                                            placeholder="Contraseña"
                                            value={newPassUsuario}
                                            onChange={this.handleInputsChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                            


                        <div className="row">
                            <div className="col-md-12">
                                <button name="submit" type="submit" value="Submit" className="site-button " onClick = {this.onSubmit}>
                                    <span> Guardar Cambios </span>
                                </button>
                            </div>
                        </div>
                                    


                    

                    </Fragment>
                )


            }


            // --------------------------------------
            // Render User Anuncios
            // --------------------------------------
            renderUserAnuncios() {
                return (
                    <div className = "row">
                                        
                    <h2> Mis Anuncios </h2>
                
                
                        <div className = "col-sm-12 col-md-12 col-lg-12">
                            <div className = "row">
                                <div className = "p-lr15 clearfix ">
                                    
                                    
                                </div>
                
                                <div className = "dlab-blog-grid-3">
                                    <div className = "col-md-12">
                                        {
                                            this.renderResultsList() 
                                        }
                                    </div>
                                </div>
                                    
                                    
                                {this.renderPagination()}
                                    
                            </div>
                        </div>        
                    </div>
                )
            }

                // --------------------------------------
            // Render Pagination
            // --------------------------------------
            renderPagination() {
                const {currentPage, anunciosCount, itemsPerPage} = this.state;
                return <Pagination currentPage = {currentPage} dataCount = {anunciosCount} onItemClick = {this.onPageitemCick} itemsPerPage = {itemsPerPage}/>
            }


            // --------------------------------------
            // Render Login 
            // Redirect the User if is Alredy Logged In
            // --------------------------------------
            renderUserDash() {
                return (
                    <Fragment>
                        <div className="page-content">
                            {this.renderSubHeader()}

                            

                            <div className="section-full content-inner bg-white contact-style-1">
                                <div className="container">

                                    <div className="row">

                                        {/*<div className="col-md-6 col-md-offset-3 col-sm-12 col-sm-col-sm-offset-0">*/}
                                        <div className = "sr-profileContainer">
                                            <h2> Mis Datos </h2>
                                            {this.renderDataForm()}
                                        </div>

                                    </div>


                                    <div className="row">

                                    {
                                        this.renderUserAnuncios()
                                    }

                                    </div>

                                </div>
                            </div>
                        </div>
                </Fragment>
                )
            }


            // --------------------------------------
            // Render ResultsList
            // --------------------------------------
            renderResultsList() {
                const {anunciosData} = this.state;
                return anunciosData.length > 0 ? <ResultsList searchResults = {anunciosData} editResults = {true}/> : this.renderNoData()
            }


            renderNoData() {
                return (
                    <div className="sr-noDataContainer">
                        <h3> A&uacute;n no has publicado anuncios</h3>
                        <h4>¡Comienza a vender ahora!</h4>
                        <ProjectLink route  = {`/nuevo-anuncio`}>
                            <button  className = "site-button" >Crear Anuncio</button> 
                        </ProjectLink> 
                    </div>  
                )
            }


            // --------------------------------------
            // Render Loader
            // --------------------------------------
            renderLoader (isTransparent) {
                    const container = document.getElementsByClassName('int-formFieldsContainer')[0]
                    const containerWidth = isTransparent ? container.clientWidth : null;
                    const containerHeight = isTransparent ? container.clientHeight : null;
                    return <div> <AppLoader customHeight = { containerHeight || 800} isTransparent = {isTransparent} customWidth = {containerWidth}/> </div>
                }

        
            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() {
                const { isLoaded } = this.state;
                return isLoaded ?  this.renderUserDash() : this.renderLoader();
            }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    UserHome.propTypes = {
        prop: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
export default UserHome;


