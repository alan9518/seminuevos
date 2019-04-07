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
    import bgImage from '../../images/header/resultadosBG.jpg';
    import axios from 'axios';
    import {SubHeader, SideBar, Breadcumbs, ResultsList, ResultsSorting, ResultsGrid, AppLoader,Pagination} from '../../Components/'
    
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
                sortingOptions : [
                    {label : 'Precio: mas bajo al mas alto' , value : 1},
                    {label : 'Precio: mas alto al mas bajo' , value : 2},
                    {label : 'Nombre: A a la Z' , value : 3},
                    {label : 'Nombre: Z a la  A' , value : 4},
                ],
                searchResults : [],
                currentPage : 1,
                resultsCount : 0,
                isLoaded : false,
                loadingData : false,
                itemsPerPage : 6
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
            const anunciosCount =  await this.getAnunciosCount();
            const anunciosData =  await this.getAnunciosData();
            
			console.log("TCL: ListResults -> loadAPI -> anunciosCount", anunciosCount)
            this.setState({
                searchResults : anunciosData,
                anunciosCount: anunciosCount.count,
                isLoaded : true
            })
        }


        /** --------------------------------------
        // Get Anuncios Data
        // With Promises
        // @returns {An Promise Object}
        // --------------------------------------*/
        async getAnunciosData(page) {
			console.log("TCL: ListResults -> getAnunciosData -> page", page)
            
            const {currentPage, itemsPerPage} = this.state

            // !page ? page = '1' : page
            const pageToSeach = page !== undefined ? page  : '1'
			console.log("TCL: ListResults -> getAnunciosData -> pageToSeach", pageToSeach)

            const loadAnunciosPromise = await axios.get(Endpoints.getAllAnuncios, { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params : {
                    page : page || currentPage,
                    items : itemsPerPage
                }
            });
            const anunciosData = await loadAnunciosPromise.data;
            // const ubicacionData = this.formatSelectValues(anunciosData);
        
            return anunciosData;
        }


        
        /** --------------------------------------
        // Get Anuncios Data
        // With Promises
        // @returns {An Promise Object}
        // --------------------------------------*/
        async getAnunciosCount() {

            const anunciosCountPromise = await axios.get(Endpoints.getAnunciosCount, { 
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
                
            });
            const anunciosCount = await anunciosCountPromise.data;
            // const ubicacionData = this.formatSelectValues(anunciosCount);
        
            return anunciosCount;
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
                listLayout : !listLayout,
                currentPage : 1,
                itemsPerPage : 6
            })
        }

        // --------------------------------------
        // Change Page
        // Load Prev/Next Page
        // --------------------------------------
        onPageitemCick = (event)=> {
            event.preventDefault();
            const {value} = event.target;
          

            this.setState({loadingData : true})

            // Update Data
            this.getAnunciosData(value).then((data)=> {
                console.log("TCL: ListResults -> onPageitemCick -> resultsData", data)
                this.setState({
                    currentPage : value,
                    searchResults : data,
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
                headerTtitle = {"Resultados"}
                backgroundImage = {bgImage}
            />
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
        // Render Pagination
        // --------------------------------------
        renderPagination() {
            const {currentPage, anunciosCount, itemsPerPage} = this.state;
			console.log("TCL: ListResults -> renderPagination -> anunciosCount", anunciosCount)
            return <Pagination currentPage = {currentPage} dataCount = {anunciosCount} onItemClick = {this.onPageitemCick} itemsPerPage = {itemsPerPage}/>
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
			console.log("TCL: ListResults -> renderResultsGrid -> searchResults", searchResults)
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
                                            
                                            
                                            {this.renderPagination()}
                                            
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
            return isLoaded ?  this.renderListView() : this.renderLoader();
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
