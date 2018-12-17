/* ==========================================================================
 * Start App Get Other Components 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
  import React, { Component } from 'react';
  import {BrowserRouter, Route, Switch} from 'react-router-dom';
  import appNavigationRoutes from './Routes/index'
  import './App.css';
  


// --------------------------------------
// Create Component
// --------------------------------------
  class App extends Component {

      // --------------------------------------
      // Iierate The Routes Defined 
      // on Routes/Index
      // --------------------------------------
      renderApp() {
        return (
          <BrowserRouter>
            <Switch>

                {appNavigationRoutes.map((appRoute, key)=> {
                  return <Route  path  = {appRoute.path} component = {appRoute.component}  key = {key}/>
                })}

            </Switch>
          </BrowserRouter>
        )
      }

      // --------------------------------------
      // Render Component
      // --------------------------------------
      render() {
        return (
          <div className="App">
            {
              this.renderApp()
            }
          </div>
        );
      }
  }


// --------------------------------------
// Export Component
// --------------------------------------
  export default App;
