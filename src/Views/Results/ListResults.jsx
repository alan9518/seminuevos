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
                    // {label : 'Nombre: A a la Z' , value : 'tituloAsc'},
                    // {label : 'Nombre: Z a la  A' , value : 'tituloDesc'},
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
                itemsPerPage : 12,
                estadosFilter : null,
                marcasFilter : null,
                yearsFilter : {startYear : 0, endYear :  2019},
            }
            this.searchValues = {}
            
            }


        // ?--------------------------------------
        // ? Look For initial Query values
        // ?--------------------------------------
        componentDidMount() {
            const {location} = this.props;
            const {search} = location;
			

            const searchValues = queryString.parse(search);
            this.setState({searchValues})
            // this.searchValues =  searchValues;

            
            
            this.loadAPI(searchValues);
        }
    

    /* ==========================================================================
    ** API Connection
    ** ========================================================================== */

        // --------------------------------------
        // GET All Requests
        // --------------------------------------
        async loadAPI(searchValues) {

            let anunciosCount = 0;
            let anunciosData = [];

            console.log("TCL: ListResults -> loadAPI -> searchValues.length", searchValues)

            if(!this.isEmpty(searchValues)) {
				
                anunciosData =  await this.getAnunciosDataWithSearchParams(searchValues);
                anunciosCount =  await this.getAnunciosCountWithSearchParams(searchValues);
                
            }
            else
            {
                anunciosData =  await this.getAnunciosData();
                anunciosCount =  await this.getAnunciosCount();
                
            }


          
            console.log("TCL: ListResults -> loadAPI -> anunciosData", anunciosData)
         
           
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
                        sortBy : sortBy,
                        
                    }
                });
                const anunciosData = await loadAnunciosPromise.data;
				console.log("TCL: ListResults -> getAnunciosData -> anunciosData", anunciosData)
            
                return anunciosData;
            }


           



            /** --------------------------------------
            // Get Anuncios Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getAnunciosDataWithSearchParams(searchParams, page = 1, sortBy = 'highDate') {
				console.log("TCL: ListResults -> getAnunciosDataWithSearchParams -> searchParams", searchParams)
                const {currentPage, itemsPerPage} = this.state
                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnunciosWithParams, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        tipo : searchParams.tipo,
                        marca : searchParams.marca,
                        modelo : searchParams.modelo,
                        ubicacion : searchParams.ubicacion,
                        precioBase : searchParams.precioBase ,
                        precioTope : searchParams.precioTope,
                        page : page || currentPage,
                        items : itemsPerPage,
                        sortBy : sortBy,
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
            // Get Anuncios Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getAnunciosCountWithSearchParams(searchParams) {

                const anunciosCountPromise = await axios.get(Endpoints.getAnunciosCountWithSearchParams, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        tipo : searchParams.tipo,
                        marca : searchParams.marca,
                        modelo : searchParams.modelo,
                        ubicacion : searchParams.ubicacion,
                        precioBase : searchParams.precioBase ,
                        precioTope : searchParams.precioTope,
                    }
                    
                });
                const anunciosCount = await anunciosCountPromise.data;
                // const ubicacionData = this.formatSelectValues(anunciosCount);
            
                return anunciosCount;
            }


            /** --------------------------------------
            // Get Anuncios Data With Sidebar Filters
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getAnunciosWithFilters(searchParams = this.state.searchParams, page = 1, sortBy = 'highDate') {
				console.log("TCL: ListResults -> getAnunciosDataWithSearchParams -> searchParams", searchParams)
                const {currentPage, itemsPerPage, activeFilters} = this.state
                console.log("TCL: getAnunciosWithFilters -> activeFilters", activeFilters)
                
                // this.splitFilters(activeFilters)

                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnunciosWithFilters, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        tipo : searchParams.tipo,
                        marca : searchParams.marca,
                        modelo : searchParams.modelo,
                        ubicacion : searchParams.ubicacion,
                        precioBase : searchParams.precioBase ,
                        precioTope : searchParams.precioTope,
                        filters : this.splitFilters(activeFilters),
                        page : page || currentPage,
                        items : itemsPerPage,
                        sortBy : sortBy,
                    }
                });
                const anunciosData = await loadAnunciosPromise.data;
				console.log("TCL: getAnunciosWithFilters -> anunciosData", anunciosData)
            
                return anunciosData;
            }



            async getAnunciosWithFiltersNoSearchParams(estadosFilter, marcasFilter, yearsFilter,  page = 1, sortBy = 'highDate') {

                const {currentPage, itemsPerPage} = this.state
                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnunciosWithFilters, { 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params : {
                        page : page || currentPage,
                        items : itemsPerPage,
                        sortBy : sortBy,
                        estadosFilter : estadosFilter || null,
                        marcasFilter : marcasFilter || null,
                        startYear : yearsFilter.startYear || null,
                        endYear : yearsFilter.endYear || null
                        
                    }
                });
                const anunciosData = await loadAnunciosPromise.data;
				console.log("TCL: ListResults -> getAnunciosData -> anunciosData", anunciosData)
            
                return anunciosData;

				// console.log("TCL: ListResults -> getAnunciosDataWithSearchParams -> searchParams", searchParams)
                // const {currentPage, itemsPerPage, activeFilters} = this.state
                // console.log("TCL: getAnunciosWithFilters -> activeFilters", activeFilters)
                
                // // this.splitFilters(activeFilters)

                // const loadAnunciosPromise = await axios.get(Endpoints.getAllAnunciosWithFilters, { 
                //     headers : { 
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json',
                //     },
                //     params : {
                //         tipo : searchParams.tipo,
                //         marca : searchParams.marca,
                //         modelo : searchParams.modelo,
                //         ubicacion : searchParams.ubicacion,
                //         precioBase : searchParams.precioBase ,
                //         precioTope : searchParams.precioTope,
                //         filters : this.splitFilters(activeFilters),
                //         page : page || currentPage,
                //         items : itemsPerPage,
                //         sortBy : sortBy,
                //     }
                // });
                // const anunciosData = await loadAnunciosPromise.data;
				// console.log("TCL: getAnunciosWithFilters -> anunciosData", anunciosData)
            
                // return anunciosData;
            }



            // ?--------------------------------------
            // ? Split Active Filters into String
            // ?--------------------------------------
            splitFilters (activeFilters) {
                const filters = activeFilters.map((f)=> { 
					
                    let filterString = `${f.filterName}:${f.value.trim()}`;
                    return filterString
                })

              

                return filters.join().trim();
            }
            
            /** --------------------------------------
            // Filter By Ubication
            // With Promises
            // @param {estado, municipio}
            // @returns {An Promise Object}
            // --------------------------------------*/

            filterByUbication = (activeEstados) =>{
			    console.log("TCL: filterByUbication -> activeEstados", activeEstados)
			
                const {estadosFilter, marcasFilter, yearsFilter} = this.state;
				


                if(this.isEmpty(this.searchValues)) {
                    //  Add Estado Filtes to New Query

                    const filters = activeEstados.map((f, index)=> { 
					console.log("TCL: filterByUbication -> index", index)
					
                        // let filterString = `${f.filterName}:${f.value.trim()}`;
                        // let filterString = `estado.${f.value.trim()}${ index >= activeEstados.length - 1 ? '' : 'OR'}`; \
                        let filterString = `estado.${f.value.trim()}`; 
                        return filterString
                    })


                    let estadosFilter =  filters.join(' OR ').trim();
                    console.log("TCL: filterByUbication -> estadosFilter", estadosFilter)
                    
                    this.setState({
                        estadosFilter : estadosFilter
                      
                    })


                    this.applyFilter(estadosFilter, this.state.marcasFilter, this.state.yearsFilter);
                }



             


               
                
            }


             /** --------------------------------------
            // Filter By Years
            // With Promises
            // @param {estado, municipio}
            // @returns {An Promise Object}
            // --------------------------------------*/
            filterByYears = (startYear, endYear) =>{
				console.log("TCL: filterByYears -> endYear", endYear)
                console.log("TCL: filterByYears -> startYear", startYear)
                    
                if(this.isEmpty(this.searchValues)) {


                    // let filterString = `start.${}} `; 
                    const yearsFilter = {startYear, endYear}
    
                    // let estadosFilter =  filters.join(' OR ').trim();
                    // console.log("TCL: filterByUbication -> estadosFilter", estadosFilter)

                    this.setState({
                        yearsFilter : yearsFilter
                    
                    })
    
    
                    this.applyFilter(this.state.estadosFilter, this.state.marcasFilter, yearsFilter);
                }
                    
			
            }


            /** --------------------------------------
            // Filter By Ubication
            // With Promises
            // @param {estado, municipio}
            // @returns {An Promise Object}
            // --------------------------------------*/
            filterByMarca = ( activeMarcas ) =>{
                
                if(this.isEmpty(this.searchValues)) {
                    //  Add Estado Filtes to New Query

                    const filters = activeMarcas.map((f, index)=> { 
					console.log("TCL: filterByUbication -> index", index)
					
                        // let filterString = `${f.filterName}:${f.value.trim()}`;
                        // let filterString = `estado.${f.value.trim()}${ index >= activeMarcas.length - 1 ? '' : 'OR'}`; \
                        let filterString = `marca.${f.value.trim()}`; 
                        return filterString
                    })


                    let marcasFilter =  filters.join(' OR ').trim();
                    console.log("TCL: filterByUbication -> estadosFilter", marcasFilter)
                    
                    this.setState({
                       
                        marcasFilter : marcasFilter,
                       
                    })


                    this.applyFilter(this.state.estadosFilter, marcasFilter, this.state.yearsFilter);
                }

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
            // getAnunciosDataWithSearchParams
            // this.getAnunciosData(newPage,selectedFilter.value)
            // if(!this.isEmpty(this.searchValues)) {
                if(!this.isEmpty(this.searchValues)) {
                
                this.getAnunciosDataWithSearchParams(this.searchValues, newPage ,selectedFilter.value) 
                    .then((data)=> {
                
                
                    this.setState({
                        currentPage : parseInt(newPage),
                        searchResults : data,
                        loadingData : false,
                        itemsPerPage : 6
                    })
                })
             }
             
                 
            else {
                this.getAnunciosData(newPage,selectedFilter.value)
                    .then((data)=> {
                    
                    
                    this.setState({
                        currentPage : parseInt(newPage),
                        searchResults : data,
                        loadingData : false,
                        itemsPerPage : 6
                    })
                })
            }
               
        }

        // --------------------------------------
        // Handle Filter Select Change
        // Load Date Based on the Filter
        // --------------------------------------
        handleSortingSelectChange = (selectedFilter) => {
        
            const {value} = selectedFilter;
            
            
			
            
            if(!this.isEmpty(this.searchValues)) {
                this.getAnunciosDataWithSearchParams(this.searchValues, 1 ,value)
                .then((data) => {
						
                    this.setState({
                        currentPage : 1,
                        selectedFilter: selectedFilter,
                        searchResults: data,
                        
                    })

                })
            }
               
            else   {
        
                this.getAnunciosData(1, value)
                    .then((data) => {
						
                        this.setState({
                            currentPage : 1,
                            selectedFilter: selectedFilter,
                            searchResults: data,
                            
                        })

                    })
            } 
               

        }


        // ?--------------------------------------
        // ? Remove Filter Options
        // ?--------------------------------------
        cleanFilterOptions = ()=> {
            this.setState({
                activeFilters : []
            })
        }


        // ?--------------------------------------
        // ? Remove Filter From State
        // ?--------------------------------------
        removeFilter = ( filter)=> {
			
            console.log("TCL: removeFilter -> filter", filter.target)
            console.log("TCL: removeFilter -> filter", filter.currentTarget.name)
            const name = filter.target.getAttribute('name'); 

            let filteredFilters = this.state.activeFilters.filter((x,index) => {
              
                return (x.value.trim() !== name.trim())
               
            })

            this.setState({activeFilters : filteredFilters});
            
        }

        // ?--------------------------------------
        // ? Check if Object is Empty
        // ?--------------------------------------
        isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }



        // ?--------------------------------------
        // ? Apply SideBar Filter
        // ?--------------------------------------
        applyFilter = (estadosFilter = this.state.estadosFilter, marcasFilter = this.state.marcasFilter,  yearsFilter = [])=> {

            const context = this;
            // Add Only Estados to query
            // if (estadosFilter !== null && marcasFilter === null && yearsFilter ===  null) {
            //     console.log("TCL: applyFilter -> estadosFilter", estadosFilter)
                
            //     this.getAnunciosWithFiltersNoSearchParams(estadosFilter, marcasFilter, yearsFilter,1 ,this.state.selectedFilter.value)

            // }

            this.getAnunciosWithFiltersNoSearchParams(estadosFilter, marcasFilter, yearsFilter, 1 ,this.state.selectedFilter.value).then((data)=> {
				console.log("TCL: applyFilter -> data", data)
                context.setState({
                    searchResults : data,
                    estadosFilter : estadosFilter,
                    marcasFilter : marcasFilter,
                    // yearsFilter : yearsFilter || [],

                })
            })
            .catch((error)=> {
				console.log("TCL: applyFilter -> error", error)
                
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
            
            return (<ActiveFilters filters = {filters} cleanFilterOptions = {this.cleanFilterOptions} removeFilterFromArray = {this.removeFilter} />);

        }

        // --------------------------------------
        // Render SideBar
        // --------------------------------------
        renderSideBar() {
            return <SideBar sideBarTitle = {"Filtros de Búsqueda"} filterByUbication = {this.filterByUbication} filterByMarca = {this.filterByMarca} filterByYears = {this.filterByYears}/>
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
                            onSelectChange = {this.handleSortingSelectChange}
                            listActive =  {listLayout}/>
        }


        // --------------------------------------
        // Render ResultsList
        // --------------------------------------
        renderResultsList() {
            const {searchResults} = this.state;
            console.log('TCL: ListResults -> renderResultsList -> searchResults', searchResults)
            // console.log('TCL: ListResults -> renderResultsList -> searchResults', ...searchResults)
            return  <ResultsList searchResults = {searchResults} editResults = {false}/>
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
            const {searchResults} = this.state;
            return (
                <Fragment> 
                    <div className = "page-content">

                        {this.renderSubHeader()}
                        
                        {this.renderBreadcumbs()}
                        
                        <div className = "section-full content-inner bg-white">
                            <div className = "container">

                                {
                                    searchResults.length > 0 ? this.renderResults() : <h2> No hubo resultados con tu Búsqueda </h2>
                                }  
                              
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }



        renderResults() {
            const {listLayout,activeFilters} = this.state;
            return (
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
                                        {
                                            listLayout === true ? this.renderResultsList() : this.renderResultsGrid()
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
