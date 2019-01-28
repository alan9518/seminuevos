/* ==========================================================================
 * List Results View 
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */
// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import PropTypes from "prop-types";
    import {Endpoints} from '../../services/endpoints';
    import axios from 'axios';
    import {SubHeader, SideBar, Breadcumbs, ResultsList, ResultsSorting, ResultsGrid} from '../../Components/'
    
// --------------------------------------
// Create Component Class
// --------------------------------------
    class ListResults extends Component {
        
        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
            this.state = {
                listLayout : true,
                carsList : [
                    {
                        id : 1 , 
                        title : 'GTA 5 Lowriders DLC', 
                        price :  '25000', 
                        img : 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic1.jpg',
                        shortDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        meta : [
                            
                                {label :'año' ,value: '2006'},
                                {label :'km' ,value: '10000'},
                                {label :'asientos',value: '4 '},
                                {label :'cc' ,value: '250'},
                                {label :'transimisión' ,value: 'manual'},
                            
                        ]
                    },
                    {
                        id : 2 , 
                        title : 'GTA 5 Lowriders DLC', 
                        price :  '25000', 
                        img : 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic2.jpg',
                        shortDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        meta : [
                            
                                {label :'año' ,value: '2006'},
                                {label :'km' ,value: '10000'},
                                {label :'asientos',value: '4 '},
                                {label :'cc' ,value: '250'},
                                {label :'transimisión' ,value: 'manual'},
                            
                        ]
                    },
                    {
                        id : 1 , 
                        title : 'GTA 5 Lowriders DLC', 
                        price :  '25000', 
                        img : 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic1.jpg',
                        shortDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        meta : [
                            
                                {label :'año' ,value: '2006'},
                                {label :'km' ,value: '10000'},
                                {label :'asientos',value: '4 '},
                                {label :'cc' ,value: '250'},
                                {label :'transimisión' ,value: 'manual'},
                            
                        ]
                    },
                    
                ],
                sortingOptions : [
                    {label : 'Precio: mas bajo al mas alto' , value : 1},
                    {label : 'Precio: mas alto al mas bajo' , value : 2},
                    {label : 'Nombre: A a la Z' , value : 3},
                    {label : 'Nombre: Z a la  A' , value : 4},
                ],
                searchResults : [],
                isLoaded : false
            }
        }

        componentDidMount() {
            this.loadAPI();
        }
    

    /* ==========================================================================
    ** API Connection
    ** ========================================================================== */

        // --------------------------------------
        // GET All Requests
        // --------------------------------------
        async loadAPI() {
            const anunciosData =  await this.getAnunciosData();
            this.setState({
                searchResults : anunciosData,
                isLoaded : true
            })
        }


        /** --------------------------------------
        // Get Anuncios Data
        // With Promises
        // @returns {An Promise Object}
        // --------------------------------------*/
        async getAnunciosData() {
            const settings = { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
            const loadAnunciosPromise = await axios.get(Endpoints.getAllAnuncios, {settings});
            const anunciosData = await loadAnunciosPromise.data;
            // const ubicacionData = this.formatSelectValues(anunciosData);
        
            return anunciosData;
        }




    /* ==========================================================================
     *  Hanlde State
     ========================================================================== */

        // --------------------------------------
        // Change Curren View Component
        // --------------------------------------
        changelistLayout = (e) => {
            const {listLayout} = this.state;
            this.setState({
                listLayout : !listLayout
            })
        }


    /* ==========================================================================
     *  Render Methods
     ========================================================================== */

        
        // --------------------------------------
        // Render SubHeader
        // --------------------------------------
        renderSubHeader() {
            return <SubHeader headerTtitle = {"Resultados"}/>
        }

        // --------------------------------------
        // Render Breadcumbs
        // --------------------------------------
        renderBreadcumbs() {
            return <Breadcumbs/>
        }


        // --------------------------------------
        // Render SideBar
        // --------------------------------------
        renderSideBar() {
            return <SideBar sideBarTitle = {"Filtros de Búsqueda"}/>
        }

        // --------------------------------------
        // Results Sorting
        // --------------------------------------
        renderResultsSorting() {
            const {sortingOptions, listLayout} = this.state;
            return <ResultsSorting 
                            sortingOptions = {sortingOptions} 
                            onClick = {this.changelistLayout}
                            listActive =  {listLayout}/>
        }


        // --------------------------------------
        // Render ResultsList
        // --------------------------------------
        renderResultsList() {
            const {searchResults} = this.state;
            console.log('TCL: ListResults -> renderResultsList -> searchResults', searchResults)
            // console.log('TCL: ListResults -> renderResultsList -> searchResults', ...searchResults)
            return <ResultsList searchResults = {searchResults} />
        }


        // --------------------------------------
        // Render Results Grid
        // --------------------------------------
        renderResultsGrid() {
            
            const {searchResults} = this.state;
            return <ResultsGrid searchResults = {searchResults || [] }/>
        }

        // --------------------------------------
        // Render List View
        // --------------------------------------
        renderListView() {
            const {listLayout} = this.state;
            return (
                <Fragment> 
                    <div className = "page-content">

                        {this.renderSubHeader()}
                        
                        {this.renderBreadcumbs()}
                        
                        <div className = "section-full content-inner bg-white">
                            <div className = "container">
                                <div className = "row">
                                    
                                    <div className="col-sm-4 col-md-4 col-lg-3">
                                        {this.renderSideBar()}
                                    </div>
                                    
                                    
                                    <div className = "col-sm-8 col-md-8 col-lg-9">
                                        <div className = "row">
                                            <div className = "p-lr15 clearfix ">
                                                
                                                {this.renderResultsSorting()}
                                            </div>
                                            
                                            <div className = "dlab-blog-grid-3">
                                                <div className = "col-md-12">

                                                    {listLayout === true ? this.renderResultsList() : this.renderResultsGrid()}

                                                </div>
                                            </div>
                                            
                                            
                                            <div className = "pagination-bx col-lg-12 clearfix ">
                                                <ul className = "pagination">
                                                    <li className = "previous"><a href="#"><i className = "fa fa-angle-double-left"></i></a></li>
                                                    <li className = "active"><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li className = "next"><a href="#"><i className = "fa fa-angle-double-right"></i></a></li>
                                                </ul>
                                            </div>
                                            
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
            const {isLoaded } = this.state
            return isLoaded && this.renderListView();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    // ListResults.propTypes = {
    // prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
    export default ListResults;
