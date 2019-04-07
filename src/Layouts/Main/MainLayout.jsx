/* ==========================================================================
 * Main Layout Component View 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import { Switch, Route, Redirect } from 'react-router-dom';
    import dashboardRoutes from '../../Routes/Routes';
    import {Header,StickyHeader, TopHeader, NavBar, Footer} from '../../Components'
    import styles from '../styles.css';
    import PropTypes from "prop-types";
    import Alert from 'react-s-alert';
    import 'react-s-alert/dist/s-alert-default.css';
    import 'react-s-alert/dist/s-alert-css-effects/slide.css';


// --------------------------------------
// Create Component Class
// --------------------------------------
    class MainLayout extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
            this.state = {
                isUserLoggedIn : false,
                isLoaded : true
            }
        }

        componentDidMount() {
            if (sessionStorage.getItem('userData')){
                this.setState({isUserLoggedIn : true})
            }
            console.log('props', this.props);
        }


        cerrarSesion = ()=> {
            if(sessionStorage.getItem('userData')) {
                sessionStorage.removeItem('userData');
                window.location.href = "/"
            }
        }

    /* ==========================================================================
     * Render Functions
     ========================================================================== */    


        // --------------------------------------
        // Render Routes
        // --------------------------------------
        renderRoutes(dashboardRoutes) {
            return (
                dashboardRoutes.map((prop,key)=> 
                    prop.redirect 
                    ? <Redirect from={prop.path} to={prop.to} key={key} /> 
                    : <Route  exact={prop.exact} path={prop.path} component={prop.component} key={prop.key}/>                  
                )
            )
        }




        // --------------------------------------
        // Render Home
        // --------------------------------------
        renderMainView() {
            const {location} = this.props;
            const {pathname} = location;
			console.log('TCL: MainLayout -> renderMainView -> pathname', pathname)
            const {isUserLoggedIn} = this.state;
            console.log('TCL: MainLayout -> renderMainView -> location', location)
            
            console.log("TCL: MainLayout -> renderMainView -> pathname", pathname)
            return (
                <Fragment>
                    <div className="page-wraper">
                        <Header>
                            <TopHeader key = {"TopHeader"}/>
                            <NavBar 
                                key = {"NavBar"} 
                                navBarRoutes = {dashboardRoutes} 
                                isUserLoggedIn = {isUserLoggedIn}
                                onClick = {this.cerrarSesion}/>
                        </Header>

                        

                    <div className="container-fluid no-padding">
                        <div className="page-content">
                            <Switch location = {location} >
                                {this.renderRoutes(dashboardRoutes)}
                            </Switch>
                        </div>
                    </div>

                    <Footer/>

                    {  
                        // No Render Footer on Home Page
                        // this.props.match.url !== '/' ?  <Footer/> : null
						
                        // pathname !== '/Demo2/' ?  <Footer/> : null
                        
                    }

                    


                </div>
                <Alert stack={{limit: 1}}  timeout={2000} />

            </Fragment>
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderMainView();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    // Home.propTypes = {
    // prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
    export default MainLayout;

