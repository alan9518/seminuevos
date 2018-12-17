/* ==========================================================================
 * Floating Search Component For Home 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import PropTypes from "prop-types";
    import {SingleSelect, ProjectLink} from '../../Components'
    import './styles.css';

// --------------------------------------
// Create Component Class
// --------------------------------------
    class FloatingSearch extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
            this.state = {
                tipo : [
                    {value : undefined, label : 'Selecciona el Tipo'},
                    {value : 'Autos', label : 'Autos'},
                    {value : 'Motos', label : 'Motos'},
                    {value : 'Clasicos', label : 'Clásicos'}
                ],
                marca : [
                    {value : undefined, label : 'Selecciona la Marca'},
                    {value : 'Dodge', label : 'Dodge'},
                    {value : 'Ford', label : 'Ford'},
                    {value : 'Chevroleft', label : 'Chevroleft'},
                    {value : 'Mazda', label : 'Mazda'},
                    {value : 'Mitsubishi', label : 'Mitsubishi'}
                ],
                modelo : [
                    {value : undefined, label : 'Selecciona el Modelo'},
                    {value : 'Aveo', label : 'Aveo'},
                    {value : 'Mirage', label : 'Mirage'},
                    {value : 'Lobo', label : 'Lobo'},
                    {value : 'Versa', label : 'Versa'},
                    {value : 'Neon', label : 'Neon'}
                ],
                ubicacion : [
                    {value : undefined, label : 'Selecciona el Estado'},
                    {value : 'Jalisco', label : 'Jalisco'},
                    {value : 'Durango', label : 'Durango'},
                    {value : 'Estado de Mexico', label : 'Estado de México'},
                    {value : 'Monterrey', label : 'Monterrey'},
                    {value : 'Queretaro', label : 'Queretaro'}
                
                ] 
                
            }
        }

        // --------------------------------------
        // Render Search Box
        // --------------------------------------
        renderSearchBox() {
            const {tipo, marca, modelo, ubicacion} = this.state
            return (
               <Fragment>
                    <div className = "form-slide">
                    <div className = "container">
                        <form className = " search-car" action="new-car-search-result-list.html" method="post">
                            <div className = "form-head">
                                <h2>Encuentra tu Pr&oacute;ximo Auto</h2>
                            </div>
                            
                            <div className = "form-find-area">
                                
                                <div className = "tab-content">
                                    
                                    <div id="new-car"  className = "tab-pane active clearfix">
                                    
                                        <div  id="budgetDiv" className = "new_form_div">
                                            <div className = "input-group">
                                                <SingleSelect 
                                                    defaultValue = {tipo[0]}
                                                    isClearable={false}
                                                    isSearchable={false}
                                                    options={tipo}
                                                    name = {'searchTypeSelect'}
                                                />
                                            </div>
                                            <div className = "input-group">
                                                <SingleSelect
                                                    defaultValue = {marca[0]} 
                                                    isClearable={false}
                                                    isSearchable={true}
                                                    options={marca}
                                                    name = {'brandSelect'}
                                                />
                                            </div>
                                            <div className = "input-group">
                                                <SingleSelect
                                                    defaultValue = {modelo[0]} 
                                                    isClearable={false}
                                                    isSearchable={true}
                                                    options={modelo}
                                                    name = {'modelSelect'}
                                                />
                                            </div>
                                            <div className = "input-group">
                                                <SingleSelect 
                                                    defaultValue = {ubicacion[0]}
                                                    isClearable={false}
                                                    isSearchable={true}
                                                    options={ubicacion}
                                                    name = {'LocationSelect'}
                                                />
                                            </div>
                                        </div>
                                                        
                                        <div className="input-group">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text" className = "form-control sm-searchInput" placeholder = "Precio Desde"/>
                                                </div>

                                                <div className="col-lg-6">
                                                <input type="text" className = "form-control sm-searchInput" placeholder = "Precio Hasta"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className = "input-group">
                                            <ProjectLink route = {`/resultados`}>
                                                <button className = "site-button button-lg btn-block" type="submit">Buscar</button>
                                            </ProjectLink>
                                        </div>
                                        <div className = "input-group text-center">
                                            <ProjectLink route = {`/resultados`}>
                                                <span className = "site-button-link">
                                                    B&uacute;squeda Avanzada 
                                                </span>
                                            </ProjectLink>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>	
                
                <div className="clearfix"></div>
               </Fragment>
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderSearchBox();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    // FloatingSearch.propTypes = {
    // prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
    export default FloatingSearch;
