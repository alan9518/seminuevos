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
                isLoaded : true
            }
        }

        componentWillMount() {
            console.log('props', this.props);
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
            return (
                <Fragment>
                    <div className="page-wraper">
                        <Header>
                            <TopHeader key = {"TopHeader"}/>
                            <NavBar key = {"NavBar"} navBarRoutes = {dashboardRoutes}/>
                        </Header>

                        

                    <div className="container-fluid no-padding">
                        <div className="page-content">
                            <Switch location = {location} >
                                {this.renderRoutes(dashboardRoutes)}
                            </Switch>
                        </div>
                    </div>


                    <Footer/>


                 </div>

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
