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
    import queryString from 'query-string';
    import {SubHeader, SideBar, Breadcumbs, ResultsList, ResultsSorting, ResultsGrid, AppLoader,Pagination, ActiveFilters} from '../../Components/'
    
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
                    {label : 'Fecha: mas recientes' , value : 'highDate'},
                    {label : 'Precio: mas bajo al mas alto' , value : 'lowPrice'},
                    {label : 'Precio: mas alto al mas bajo' , value : 'HighPrice'},
                    {label : 'Nombre: A a la Z' , value : 'tituloAsc'},
                    {label : 'Nombre: Z a la  A' , value : 'tituloDesc'},
                ],
                maxPrice : 0,
                minPrice : 0,
                activeFilters : [],
                searchResults : [],
                municipios : [],
                selectedFilter :  {label : 'Fecha: mas recientes' , value : 'highDate'},
                currentPage : 1,
                resultsCount : 0,
                isLoaded : false,
                loadingData : false,
                itemsPerPage : 6,
               
            }
            // this.estados = [];
        }

        componentDidMount() {
            const {location} = this.props;
            const {search} = location;

            const searchValues = queryString.parse(search);
			console.log("TCL: ListResults -> componentDidMount -> searchValues", searchValues)

            // const currentFilters =  searchValues.filter(filter=> filter !== 'nan')
			// console.log("TCL: ListResults -> componentDidMount -> currentFilters", currentFilters)
            
            this.loadAPI(searchValues);
        }
    

    /* ==========================================================================
    ** API Connection
    ** ========================================================================== */

        // --------------------------------------
        // GET All Requests
        // --------------------------------------
        async loadAPI(searchValues) {

            

            const anunciosCount =  await this.getAnunciosCount();
            // const anunciosData =  await this.getAnunciosData();

            const anunciosData =  await this.getAnunciosDataWithSearchParams(searchValues);
           
            this.setState({
                searchResults : anunciosData,
                anunciosCount: anunciosCount.count,
                isLoaded : true
            })
        }


     


        /* ==========================================================================
        ** Data For Results
        ** ========================================================================== */


            /** --------------------------------------
            // Get Anuncios Data, all Vlaues
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getAnunciosData(page = 1, sortBy = 'highDate') {
                const {currentPage, itemsPerPage} = this.state
                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnuncios, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        page : page || currentPage,
                        items : itemsPerPage,
                        sortBy : sortBy
                    }
                });
                const anunciosData = await loadAnunciosPromise.data;
            
                return anunciosData;
            }


            /** --------------------------------------
            // Get Anuncios Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getAnunciosDataWithSearchParams(searchParams, page = 1, sortBy = 'highDate') {
                const {currentPage, itemsPerPage} = this.state
                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnuncios, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        page : page || currentPage,
                        items : itemsPerPage,
                        sortBy : sortBy,
                        location : 'jalisco'
                    }
                });
                const anunciosData = await loadAnunciosPromise.data;
            
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


            
            /** --------------------------------------
            // Filter By Ubication
            // With Promises
            // @param {estado, municipio}
            // @returns {An Promise Object}
            // --------------------------------------*/
            filterByUbication = ( estado, ciudad) =>{
			
                const {activeFilters} = this.state;

                estado.value !== null && activeFilters.push({filterName : 'estado', displayText : 'Estado',  value : `${estado.label} `});
                ciudad.value !== null && activeFilters.push({filterName : 'ciudad', displayText : 'Ciudad',  value : `${ciudad.label}`});

                this.setState({
                    activeFilters : activeFilters
                })

			
               
                
            }


            /** --------------------------------------
            // Filter By Ubication
            // With Promises
            // @param {estado, municipio}
            // @returns {An Promise Object}
            // --------------------------------------*/
            filterByMarca = ( marca) =>{
                
                console.log("TCL: ListResults -> filterByMarca -> marca", marca)
				
                const {activeFilters} = this.state;

                
                marca.value !== null && activeFilters.push({filterName : 'marca', displayText : 'Marca',  value : `${marca.label}`});

                this.setState({
                    activeFilters : activeFilters
                })

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
            const {selectedFilter} = this.state;
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
            this.getAnunciosData(newPage,selectedFilter.value).then((data)=> {
                
                this.setState({
                    currentPage : parseInt(newPage),
                    searchResults : data,
                    loadingData : false,
                    itemsPerPage : 6
                })
            })
        }

        // --------------------------------------
        // Handle Filter Select Change
        // Load Date Based on the Filter
        // --------------------------------------
        handleFilterSelectChange = (selectedFilter) => {
        
            const {value} = selectedFilter;

                this.getAnunciosData(1, value)
                    .then((data) => {
						
                        this.setState({
                            currentPage : 1,
                            selectedFilter: selectedFilter,
                            searchResults: data,
                            
                        })

                    })

        }


        // ?--------------------------------------
        // ? Remove Filter Options
        // ?--------------------------------------
        cleanFilterOptions = ()=> {
            this.setState({
                activeFilters : []

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
        // Render Current Filters
        // --------------------------------------
        renderCurrenFilters(filters) {
            console.log("TCL: ListResults -> renderCurrenFilters -> filters", filters)
            
            return (<ActiveFilters filters = {filters} cleanFilterOptions = {this.cleanFilterOptions}/>);

        }

        // --------------------------------------
        // Render SideBar
        // --------------------------------------
        renderSideBar() {
            return <SideBar sideBarTitle = {"Filtros de Búsqueda"} filterByUbication = {this.filterByUbication} filterByMarca = {this.filterByMarca}/>
        }

        // --------------------------------------
        // Render Pagination
        // --------------------------------------
        renderPagination() {
            const {currentPage, anunciosCount, itemsPerPage} = this.state;
            return <Pagination currentPage = {currentPage} dataCount = {anunciosCount} onItemClick = {this.onPageitemCick} itemsPerPage = {itemsPerPage}/>
        }

        // --------------------------------------
        // Results Sorting
        // --------------------------------------
        renderResultsSorting() {
            const {sortingOptions, listLayout, selectedFilter} = this.state;
            return <ResultsSorting 
                            sortingOptions = {sortingOptions} 
                            onClick = {this.changelistLayout}
                            selectedFilter = {selectedFilter}
                            onSelectChange = {this.handleFilterSelectChange}
                            listActive =  {listLayout}/>
        }


        // --------------------------------------
        // Render ResultsList
        // --------------------------------------
        renderResultsList() {
            const {searchResults} = this.state;
            // console.log('TCL: ListResults -> renderResultsList -> searchResults', searchResults)
            // console.log('TCL: ListResults -> renderResultsList -> searchResults', ...searchResults)
            return <ResultsList searchResults = {searchResults} />
        }


        // --------------------------------------
        // Render Results Grid
        // --------------------------------------
        renderResultsGrid() {
            
            const {searchResults} = this.state;
			// console.log("TCL: ListResults -> renderResultsGrid -> searchResults", searchResults)
            return <ResultsGrid searchResults = {searchResults || [] }/>
        }

        // --------------------------------------
        // Render List View
        // --------------------------------------
        renderListView() {
            const {listLayout,activeFilters} = this.state;
			console.log("TCL: ListResults -> renderListView -> activeFilters", activeFilters)
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
                                                {activeFilters && this.renderCurrenFilters(activeFilters)}
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
