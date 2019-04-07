/* ==========================================================================
** New Anuncio Form Container
** 24/02/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import { AppButton, OptionsBox, AppLoader, PriceTable, CustomSelect,FilesManager, SubHeader, Breadcumbs, FacebookFeed, AnuncioConfimation } from '../../Components';
    import { Endpoints } from '../../services/endpoints';
    import bgImage from '../../images/header/nuevoAnuncioBG.jpg'
    import axios from 'axios';
    import Select from 'react-select';
    import PropTypes from 'prop-types';
    import './styles.css';
    import Alert from 'react-s-alert';
    import 'react-s-alert/dist/s-alert-default.css';
    import 'react-s-alert/dist/s-alert-css-effects/slide.css';


// --------------------------------------
// Create Component Class
// --------------------------------------
    class NewAnuncio extends Component {

        /* ==========================================================================
        ** Component Setup
        ** ========================================================================== */


            // --------------------------------------
            // Constructor
            // --------------------------------------
            constructor(props) {
                super(props);
                this.state = {
                    isLoaded: false,
                    currentStep: 0,
                    newAnuncio: {
                        tipo_vehiculo : null,
                        id_tipo_anuncio : null,
                        tipo_anuncio: null,
                        marca: null,
                        modelo: null,
                        year: null,
                        estado: null,
                        municipio : null,
                        kilometraje: null,
                        ultimoDigito : null,
                        estado_vehiculo: null,
                        telefono: null,
                        precio: null,
                        transaccion: null, 
                        descripcion : null,
                        transmision : null,
                        imagenes_Anuncio : [],
                        condicion : null,
                        tipo_manejo : null,
                        carroceria : null,
                        tipo_combustible : null,
                        propietarios :  null,
                        color : null,
                        vestiduras : null,
                        equipamiento : [],
                        mainImage : {},
                        precioAnuncio : null
                    },
                    precioTipoAnuncio : null,
                    selectedTipoVehiculo : { value: undefined, label: 'Selecciona el Tipo de Vehículo' },
                    selectedMarca: { value: undefined, label: 'Selecciona la Marca' },
                    selectedModelo: { value: undefined, label: 'Selecciona el Modelo' },
                    selectedEstado: { value: undefined, label: 'Selecciona el Estado' },
                    selectedMunicipio: { value: undefined, label: 'Selecciona el Municipio' },
                    selectedYear: { value: undefined, label: 'Selecciona el Año' },
                    selectedTransaccion : { value: undefined, label: 'Selecciona el Tipo de Transacción' }, 
                    selectedCombustible : { value: undefined, label: 'Selecciona el Tipo de Combustible' }, 
                    selectedTransmision : { value: undefined, label: 'Selecciona el Tipo de Transmisión' }, 
                    selectedCondicion : { value: undefined, label: 'Selecciona la Condición del Vehículo' }, 
                    selectedTipoManejo :   { value: undefined, label: 'Selecciona el Tipo de Manejo' },
                    selectedcarroceria :  { value: undefined, label: 'Selecciona el Tipo de Carrocería' },
                    selectedColor : { value: undefined, label: 'Selecciona el color' },
                    selectedVestiduras : { value: undefined, label: 'Selecciona la vestidura' },
                    selectedAnuncio : {},
                    modelos: [],
                    municipios : [],
                    hasMainImage : false,
                    maxImages : null,
                    imagenes_Anuncio : [],
                    equipamientoData : [
                        {checked : false, value : 'ABS', label : 'ABS'},
                        {checked : true, value : 'Aire acondicionado', label : 'Aire acondicionado'},
                        {checked : false, value : 'Bolsas de aire frontales', label : 'Bolsas de aire frontales'},
                        {checked : false, value : 'Bolsas de aire laterales', label : 'Bolsas de aire laterales'},
                        {checked : false, value : 'Elevalunas electrico', label : 'Elevalunes eléctrico'},
                        {checked : false, value : 'Faros LED', label : 'Faros LED'},
                        {checked : false, value : 'Faros Xenon', label : 'Faros Xenón'},
                        {checked : false, value : 'GPS', label : 'GPS'},
                        {checked : false, value : 'Radio', label : 'Radio'}
                        
                    ]
                   
                   
                }

                this.imagenes_Anuncio = [];
                this.mainImage = null;

                this.tipoData = [
                    { value: undefined, label: 'Selecciona el Tipo' },
                    { value: '1', label: 'Autos' },
                    { value: '2', label: 'Motos' },
                    { value: '3', label: 'Clásicos' }
                ];

                this.transaccionData = [
                    { value: undefined, label: 'Selecciona el Tipo de Transaccion' },
                    { value: 'fijo', label: 'fijo' },
                    { value: 'negociable', label: 'negociable' },
                ];

                this.trasnmisionData = [
                    { value: undefined, label: 'Selecciona el Tipo de Transmisión' },
                    { value: 'Estandar', label: 'Estándar' },
                    { value: 'Manual', label: 'Manual' },
                ];
                
                this.tipoCondicion = [
                    { value: undefined, label: 'Selecciona el Tipo de Transacción' },
                    { value: 'Nuevo', label: 'Nuevo' },
                    { value: 'Seminuevo', label: 'Seminuevo' },
                ]

                this.tipoAnuncio  = [
                    {
                        index : 1,
                        nombre : 'Estándar',
                        id : 'estándar',
                        precio : 'Gratis',
                        disponibilidad : 'Automoviles y Motocicletas',
                        fotos : '3 fotos por anuncio',
                        duracion : 'Duración: 10 dias desde la publicación',
                        posicionamiento : 'Posicionamiento Estándar',
                        seleccionado : this.state.seleccionado,
                        recomendado : true
                    },
                    {
                        index : 2,
                        nombre : 'Premium',
                        id : 'premium', 
                        precio : 150,
                        disponibilidad : 'Automoviles y Motocicletas',
                        fotos : '7 fotos por anuncio',
                        duracion : 'Duración :Hasta que se se vendan',
                        posicionamiento : 'Aparecen primero en la búsqueda',
                        seleccionado : this.state.seleccionado
                        
                    },
                    {
                        index : 3,
                        nombre : 'Clásico',
                        id : 'clasico',
                        precio : 'Gratis',
                        disponibilidad : 'Autos clásicos',
                        fotos : '5 fotos por anuncio',
                        duracion : 'Duración: Hasta que se venda',
                        posicionamiento : 'Posicionamiento Estándar',
                        seleccionado : this.state.seleccionado
                    },
                    {
                        index : 4,
                        nombre : 'Agencias',
                        id : 'agencias',
                        precio : 350,
                        disponibilidad : '3 automóviles',
                        fotos : '5 fotos por auto',
                        duracion : 'Duración: Hasta que se vendan',
                        posicionamiento : 'El mejor posicionamiento ',
                        seleccionado : this.state.seleccionado
                    },

                ];
                this.carroceriaData =  [
                    { value: undefined, label: 'Selecciona el Tipo de Carrocería' },
                    { value: 'Compacto', label: 'Compacto' },
                    { value: 'Coupe', label: 'Coupé' },
                    { value: 'Crossover', label: 'Crossover' },
                    { value: 'Descapotable', label: 'Descapotable' },
                    { value: 'Furgoneta', label: 'Furgoneta' },
                    { value: 'Minivan', label: 'Minivan' },
                    { value: 'SUV', label: 'SUV' },
                    { value: 'Sedán', label: 'Sedán' },
                    { value: 'Pickup', label: 'Pickup' },
                    

                ];

                this.tipoManejoData = [
                    { value: undefined, label: 'Selecciona el Tipo de Manejo' },
                    { value: 'Traccion Delantera', label: 'Tracción Delantera' },
                    { value: 'Traccion Trasera', label: 'Tracción Trasera' },
                    { value: 'Traccion Total', label: 'Tracción Total' },
                ];
                this.tipoCombustibleData = [
                    { value: undefined, label: 'Selecciona el Tipo de Combustible' },
                    { value: 'Diesel', label: 'Diésel' },
                    { value: 'Eléctrico', label: 'Eléctrico' },
                    { value: 'Gasolina', label: 'Gasolina' },
                    { value: 'Híbrido', label: 'Híbrido' },
                ];
                
                
                this.ubicacionData = [];
                this.vestidurasData = [
                    { value: undefined, label: 'Selecciona la vestidura' },
                    {value : 'Alcántara', label : 'Alcántara'},
                    {value : 'Piel', label : 'Piel'},
					{value : 'Tela', label : 'Tela'},
                ]

                this.condicionData = [
                    { value: undefined, label: 'Selecciona la condición' },
                    {value : 'Nuevo', label : 'Nuevo'},
                    {value : 'Seminuevo', label : 'Seminuevo'}
					
                ]

               
                this.colorsData = [
                    { value: undefined, label: 'Selecciona el color' },
                    {value : 'rojo', label : 'Rojo'},
                    {value : 'azul', label : 'Azul'},
                    {value : 'verde', label : 'Verde'},
                    {value : 'negro', label : 'Negro'},
                    {value : 'blanco', label : 'Blanco'},
                    {value : 'amrillo', label : 'Amarillo'},
                    {value : 'plata', label : 'Plata'},
                    {value : 'arena', label : 'Arena'},
                ];
            }

            // --------------------------------------
            // Set Initial Values
            // --------------------------------------
            componentDidMount() {
                this.loadAPI();
                // this.carroceria();
            }


        /* ==========================================================================
        ** API Connection
        ** ========================================================================== */


            // --------------------------------------
            // Get All requests
            // --------------------------------------
            async loadAPI() {
                const marcasArray = await this.loadMarcas();
                this.marcasData = marcasArray;
                const ubicacionArray = await this.loadUbicacion();
                this.ubicacionData = ubicacionArray;
                console.log('​FloatingSearch -> loadAPI -> this.marcasData', this.marcasData)

                this.setState({
                    isLoaded: true
                })

            }


            /** --------------------------------------
            // Get Marcas
            // @returns {An array With all the Marcas}
            // --------------------------------------*/
            async loadMarcas() {
                const settings = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }
                const loadMarcasPromise = await axios.get(Endpoints.getAllMarcas, { settings });
                const marcasArray = await loadMarcasPromise.data;

                return marcasArray;
            }


            /** --------------------------------------
            // Get Municipios
            // @returns {An array With all the Municipios}
            // --------------------------------------*/
            async loadMunicipios(id_estado) {
                const { value } = id_estado;
                const loadMunicipiosPromise = axios.get(Endpoints.getMunicipiosByEstado, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        id_estado: value || 0
                    }
                });

                return loadMunicipiosPromise;
            }

            /** --------------------------------------
            // Get Marcas
            // @returns {An array With all the Marcas}
            // --------------------------------------*/
            async loadUbicacion() {
                const settings = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }
                const loadUbicacionPromise = await axios.get(Endpoints.getAllEstados, { settings });
                const ubicacionArray = await loadUbicacionPromise.data;
                // const ubicacionData = this.formatSelectValues(ubicacionArray);

                return ubicacionArray;
            }


            /** --------------------------------------
            // Get Modelos
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async loadModelos(marca_id) {
                const { value } = marca_id;
                const loadModelosPromise = axios.get(Endpoints.getModelosByMarca, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        marca_id: value || 0
                    }
                });

                return loadModelosPromise;
            }

            /** --------------------------------------
            // Get Anuncios Data
            // With Promises
            // @returns {An Promise Object}
            // --------------------------------------*/
            async getAnunciosData() {
                const settings = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }
                const loadAnunciosPromise = await axios.get(Endpoints.getAllAnuncios, { settings });
                const anunciosData = await loadAnunciosPromise.data;

                return anunciosData;
            }


        /* ==========================================================================
        ** Handle State
        ** ========================================================================== */

   
            // --------------------------------------
            // Text Input Change
            // --------------------------------------
            handleInputChange = (event)=> {
                const target =  event.target.name
				console.log("TCL: NewAnuncio -> handleInputChange -> target", target)
                const value = event.target.value;
                let {newAnuncio} = this.state;
                
                
                newAnuncio[target] = value;

                this.setState({newAnuncio})

                
            }

            // --------------------------------------
            // Handle Marcas Select State
            // --------------------------------------
            handleSelectMarcaChange = (selectedMarca) => {

                this.loadModelos(selectedMarca)
                    .then((modelosAnswer) => {
                        let modelos = modelosAnswer.data;
                        
                        this.setState({
                            selectedMarca: selectedMarca,
                            modelos: modelos,
                            isModelosLoaded: false
                        })

                    })

            }

            /* ==========================================================================
            ** Mange Selects
            ** ========================================================================== */
                // --------------------------------------
                // Get Selected Vehiculo Value
                // --------------------------------------
                handleSelectTipoVehiculoChange = (selectedTipoVehiculo) => {
                    
                    this.setState({
                        selectedTipoVehiculo: selectedTipoVehiculo
                    })
                }

                // --------------------------------------
                // Get Model Value
                // --------------------------------------
                handleSelectModeloChange = (selectedModelo) => {
                    
                    this.setState({
                        selectedModelo: selectedModelo
                    })
                }

                // --------------------------------------
                // Get Combustible Value
                // --------------------------------------

                handleSelecCombustibleChange = (selectedCombustible) => {
                    
                    this.setState({
                        selectedCombustible: selectedCombustible
                    })
                }

                // --------------------------------------
                // Get Colors Value
                // --------------------------------------
                handleSelectColorChange = (selectedColor) => {
                    
                    this.setState({
                        selectedColor: selectedColor
                    })
                }

                // --------------------------------------
                // Get Carroceria Value
                // --------------------------------------
                handleSelectCarroceriaChange = (selectedcarroceria) => {
                    
                    this.setState({
                        selectedcarroceria: selectedcarroceria
                    })
                }
                // --------------------------------------
                // Get Ubicacion Value
                // --------------------------------------
                handleSelectUbicacionChange = (selectedEstado) => {
                    this.loadMunicipios(selectedEstado)
                        .then((municipiosAnswer) => {
                            let municipios = municipiosAnswer.data;
                            
                            this.setState({
                                selectedEstado: selectedEstado,
                                municipios: municipios,
                                ismunicipiosLoaded: false
                            })

                        })
                    
                }

                // --------------------------------------
                // Get Model Value
                // --------------------------------------
                handleSelectMunicipioChange = (selectedMunicipio) => {
                    
                    this.setState({
                        selectedMunicipio: selectedMunicipio
                    })
                }


                // --------------------------------------
                // Get YEar Value
                // --------------------------------------
                handleSelectYearsChange = (selectedYear) => {
                    
                    this.setState({
                        selectedYear: selectedYear
                    })
                }

                // --------------------------------------
                // Get Ubicacion Value
                // --------------------------------------
                handleSelectCondicionChange = (selectedCondicion) => {
                    
                    this.setState({
                        selectedCondicion: selectedCondicion
                    })
                }



                // --------------------------------------
                // Get Transaction Value
                // --------------------------------------
                handleSelectTranChange = (selectedTran) => {
                    
                    this.setState({
                        selectedTransaccion: selectedTran
                    })
                }


                // --------------------------------------
                // Get trasnmision Value
                // --------------------------------------
                handleSelectTransmisionChange = (selectedTran) => {
                    
                    this.setState({
                        selectedTransmision: selectedTran
                    })
                }

                // --------------------------------------
                // Get Vestiduras Value
                // --------------------------------------
                handleSelectVestidurasChange = (selectedVestidura) => {
                    
                    this.setState({
                        selectedVestiduras: selectedVestidura
                    })
                }


                handleSelectTipoManejoChange = (selectedTipoManejo) => {
                    
                    this.setState({
                        selectedTipoManejo: selectedTipoManejo
                    })
                }
                // --------------------------------------
                // Get JSON Response and Format to 
                // React-select Type
                // --------------------------------------
                formatSelectValues(valuesAray) {
                    const data = valuesAray.map((valueItem) => {
                        let data = {
                            label: valueItem.nombre,
                            value: valueItem.id
                        }
                        return data;
                    })
                    return data;
                }

                // --------------------------------------
                // Fill Select With Years
                // --------------------------------------
                getyearsArray() {
                    const year = (new Date()).getFullYear();
                    const arraySize = year - 1950;
                    const yearsArray = Array.from(new Array(arraySize), (val, index) => {
                        return { value: (year - index), label: (year - index) }
                    });

                    return yearsArray;
                }


            // --------------------------------------
            // Change tab
            // --------------------------------------
            changeNextTab = (event) => {
                const {currentStep} = this.state;
				
                let anuncioData = this.state.newAnuncio;
                switch(currentStep) {
                    case 1 : 
                        if(this.validateFieldsFirstTab() === false)
                            return;
                        anuncioData =  Object.assign({},this.saveFirstTab())
                        console.log('TCL: NewAnuncio -> changeNextTab -> newAnuncio', anuncioData);
                        
                        break;
                    case 2 : 
                        if(this.validateFieldsSecondTab() === false)
                            return;
                        anuncioData = Object.assign({},anuncioData,this.saveSecondTab())
						console.log('TCL: NewAnuncio -> changeNextTab -> anuncioData', anuncioData)
                        break;
                    default : return;
                }
				

                this.setState({
                    newAnuncio : anuncioData,
                    currentStep: currentStep + 1
                })
            }


            // --------------------------------------
            // Save Values First Tab
            // --------------------------------------
            saveFirstTab = () => {
                // let {newAnuncio} = this.state;

                // Get Current Anuncio Selected Price
                const selectedAnuncioFiltered = this.tipoAnuncio.filter((tipo)=>tipo.id === this.state.selectedAnuncio);
				console.log("TCL: NewAnuncio -> saveFirstTab -> selectedAnuncioFiltered", selectedAnuncioFiltered)
                

                let anuncioData = {}
                    anuncioData.precio = this.state.newAnuncio.precio;
                    anuncioData.telefono =  this.state.newAnuncio.telefono;
                    anuncioData.kilometraje =  this.state.newAnuncio.kilometraje;
                    anuncioData.ultimoDigito =  this.state.newAnuncio.ultimoDigito;
                    anuncioData.tipo_anuncio = this.state.selectedAnuncio;
                    anuncioData.tipo_vehiculo = this.state.selectedTipoVehiculo;
                    anuncioData.marca =  this.state.selectedMarca;
                    anuncioData.modelo =  this.state.selectedModelo
                    anuncioData.year =  this.state.selectedYear;
                    anuncioData.estado = this.state.selectedEstado;
                    anuncioData.municipio = this.state.selectedMunicipio;
                    anuncioData.transaccion = this.state.selectedTransaccion;
                    anuncioData.transmision = this.state.selectedTransmision;
                    anuncioData.condicion = this.state.selectedCondicion;
                    anuncioData.color =  this.state.selectedColor;
                    anuncioData.tipo_combustible =  this.state.selectedCombustible; 
                    anuncioData.propietarios = this.state.newAnuncio.propietarios; 
                    anuncioData.precioAnuncio = selectedAnuncioFiltered[0].precio
                    anuncioData.id_tipo_anuncio = selectedAnuncioFiltered[0].index
                    console.log('TCL: NewAnuncio -> saveFirstTab -> anuncioData', anuncioData)
                return anuncioData
				
            }


            getEquipamientoItems() {
                const {equipamientoData} = this.state;
                const equipamientoValues = equipamientoData.filter((eq)=>eq.checked === true) ;

                return equipamientoValues;
            }

            // --------------------------------------
            // Save Desc and Images
            // --------------------------------------
            saveSecondTab =() => {
                const {descripcion} = this.state.newAnuncio
                let newAnuncio = {};
                    newAnuncio.descripcion = descripcion;
                    newAnuncio.imagenes_Anuncio =  this.imagenes_Anuncio;
                    newAnuncio.mainImage = this.mainImage;
                    newAnuncio.carroceria =  this.state.selectedcarroceria;
                    newAnuncio.tipo_manejo = this.state.selectedTipoManejo;
                    newAnuncio.vestiduras = this.state.selectedVestiduras;
                    newAnuncio.equipamiento = this.getEquipamientoItems()
                console.log('TCL: NewAnuncio -> saveSecondTab -> newAnuncio', newAnuncio)
                
                return newAnuncio
            }

            // --------------------------------------
            // Change Prev tab
            // --------------------------------------
            changePrevTab = (event) => {
                const {currentStep} = this.state;
                
                this.setState({
                    currentStep: currentStep - 1
                })
            }


            // --------------------------------------
            // Select Price Card & Change Step
            // --------------------------------------
            onCardClick = (event) => {
               
                const selectedCard = (event.currentTarget.id);
				console.log("TCL: NewAnuncio -> onCardClick -> selectedCard", selectedCard)
                

				// console.log("TCL: NewAnuncio -> onCardClick -> precioAnuncio", precioAnuncio)
                console.log('TCL: NewAnuncio -> onCardClick -> selectedCard', selectedCard)
                
                // console.log("TCL: NewAnuncio -> onCardClick -> precioAnuncio", precioAnuncio.precio)
                
                this.setState({
                    selectedAnuncio : selectedCard,    
                    // precioTipoAnuncio : precioAnuncio.precio,
                    currentStep : 1
                })
                
            }

            /* ==========================================================================
            ** FIle Manager Fuctions
            ** ========================================================================== */


                // --------------------------------------
                // Handle Add File to Dropzone
                // Image Gallery
                // --------------------------------------
                handleFileAdded = (file, dropzone) =>{
                    console.log('TCL: NewAnuncio -> handleFileAdded -> dropzone', dropzone)

                    const maxImages = this.setMaxImageAllowed(this.state.selectedAnuncio);
					console.log('TCL: NewAnuncio -> handleFileAdded -> maxImages', maxImages)
					

                    if (dropzone.files.length > maxImages)
                        dropzone.removeFile(dropzone.files[dropzone.files.length -1]);


                    this.imagenes_Anuncio.push(file);
                    // console.log('files array', this.imagenes_Anuncio);
                    if( file.type.indexOf('image/') < 0 )
                    {
                        this.createPreviewImageDropzone(null, file);
                    }
                }

                // --------------------------------------
                // Handle Add File to Dropzone
                // Main Image
                // --------------------------------------
                onFileAddedMain = (file, dropzone) => {
                    console.log('dropzone', dropzone)
                    console.log('drop ', file);

                    if(file.type.indexOf('image') < 0)
                    {
                        this.setState({isDisabled : true})
                        // this.createErrorAlertPerm('The Format of the Image is Incorrect.')
                    }
                    else
                    {
                        this.setState({isDisabled : false})
                        // Alert.closeAll()
                    }
                        
                    if (dropzone.files.length > 1)
                        dropzone.removeFile(dropzone.files[0]);
                    
                    this.mainImage = file;
                
                }

                // --------------------------------------
                // Handle Remove Fxile to Dropzone
                // --------------------------------------
                handleFileRemoved = (file) => {

                    let removedfileName = file.name;
                    let newimagenes_Anuncio = [];
                    this.imagenes_Anuncio.map((file) => {
                        // if(file.indexOf())
                        if (file.name.indexOf(removedfileName) < 0) {
                            newimagenes_Anuncio.push(file)
                        }
                    })

                    this.imagenes_Anuncio = newimagenes_Anuncio;
                    console.log('this.imagenes_Anuncio', this.imagenes_Anuncio);


                }


            
                // --------------------------------------
                // Preload Dropzone FIles
                // --------------------------------------

                preloadFiles = (dropzone)=> {
					console.log('TCL: NewAnuncio -> preloadFiles -> dropzone', dropzone)
                    const {imagenes_Anuncio} = this;

                    if (imagenes_Anuncio === null)
                        return;

                    imagenes_Anuncio.map((mockDoc, index) => {
                        // let mockFile = this.props.fieldValues.ProjectImage;
                        dropzone.options.addedfile = mockDoc;
                        dropzone.emit("addedfile", mockDoc);
                        dropzone.emit("thumbnail", mockDoc, mockDoc.dataURL);
                        dropzone.emit("complete", mockDoc);
                        // Set width and height
                        if( mockDoc.type.indexOf('image/') < 0 )
                        {
                            console.log('mockDoc', mockDoc);
                            console.log('index', index);
                            this.createPreviewImageDropzone(index, mockDoc);
                        
                        }
                        else
                        {
                            let imageContainer = document.getElementsByClassName('dz-image')[index];
                            let image = imageContainer.childNodes[0];
                               image.style.width = "120px";
                                image.style.height = "120px";
                        }
                        
                    });
                }



                // --------------------------------------
                // Remove Spported File Type Icons
                // --------------------------------------
                removeElements = (elms) => {
                    [...elms].forEach(el => el.remove());
                }



                // --------------------------------------
                // Create Prev Image 
                // --------------------------------------        
                createPreviewImageDropzone(index, file) {

                    let imageContainer = null
                    if(index !== null)
                        imageContainer = document.getElementsByClassName('dz-image')[index];
                    else
                        imageContainer = document.getElementsByClassName('dz-image')[this.imagenes_Anuncio.length - 1];
                    
                    let image = imageContainer.childNodes[0];
                    let imageSrc = this.getFileIconDropzone(file.type , file.name);
                        image.style.width = "120px";
                        image.style.height = "120px";
                        image.src = imageSrc;
                }


                // --------------------------------------
                // Set File Icon for Dropzone Prev
                // --------------------------------------
                getFileIconDropzone(fileType, fileName) {
                    let fileExtension = "";
                    if(fileType !== "")
                        fileExtension =  fileType.split('/')[1]
                    else       
                        fileExtension =  fileName.split('.')[1]
                    let iconSrc = `https://flextronics365.sharepoint.com/sites/project_intake/ProjectIntake/assets/File-Icons/${fileExtension}.png`;
                    console.log('iconSrc', iconSrc);

                    return iconSrc;
                }


                // --------------------------------------
                // Set Max Allowed Files Dropzone
                // --------------------------------------
                setMaxImageAllowed (selectedAnuncio) {
                    switch(selectedAnuncio) {
                        case "estandar" : return 3;
                            break;
                        case "premium" : return 7;
                            break;
                        case "clasico" : return 5;
                            break;
                        case "agencias" : return 5;
                            break;
                        default : return
                    }
                }


            // --------------------------------------
            // Toggle CheckBoox State
            // --------------------------------------
            onCheckBoxChange = (event)=> {
                const {equipamientoData}  = this.state;
                let newEq = equipamientoData.map((data)=> {
                    if(data.value === event.target.value)
                        data.checked = !data.checked
                    return data
                })
            

                this.setState({
                    equipamientoData : newEq
                })

            }


            // --------------------------------------
            // validate Empty Fields
            // Datos obligatorios:
            // Marca
            // Modelo
            // Año
            // Precio
            // Ubicación
            // Tipo de vendedor
            // Condición
            // Propietarios.
            // --------------------------------------
            validateFieldsFirstTab() {
                const {selectedTipoVehiculo,  selectedMarca, selectedModelo, selectedCondicion, selectedYear, selectedEstado, selectedMunicipio} = this.state;
                const {precio,propietarios} = this.state.newAnuncio;
                let hasErrors = false;
                if(selectedTipoVehiculo.value === null ||selectedTipoVehiculo.value === undefined ) {hasErrors = true; this.addErrorStatus("tipoVehiculo");} else this.removeErrorStatus("tipoVehiculo");
                if(selectedMarca.value === null ||selectedMarca.value === undefined ) {hasErrors = true; this.addErrorStatus("marca");} else this.removeErrorStatus("marca");
                if(selectedModelo.value === null ||selectedModelo.value === undefined ) {hasErrors = true; this.addErrorStatus("modelo");} else this.removeErrorStatus("modelo");
                if(selectedYear.value === null ||selectedYear.value === undefined ) {hasErrors = true; this.addErrorStatus("year");} else this.removeErrorStatus("year");
                if(precio === null ||precio === undefined ) {hasErrors = true; this.addErrorStatus("precio");} else this.removeErrorStatus("precio");
                if(selectedEstado.value === null ||selectedEstado.value === undefined ) {hasErrors = true; this.addErrorStatus("estado");} else this.removeErrorStatus("estado");
                if(selectedMunicipio.value === null ||selectedMunicipio.value === undefined ) {hasErrors = true; this.addErrorStatus("municipio");} else this.removeErrorStatus("municipio");
                if(selectedCondicion.value === null ||selectedCondicion.value === undefined ) {hasErrors = true; this.addErrorStatus("condicion");} else this.removeErrorStatus("condicion");
                if(propietarios === null ||propietarios === undefined ) {hasErrors = true; this.addErrorStatus("propietarios");} else this.removeErrorStatus("propietarios");
            //    else if(condicion === null ) hasErrors = true; 

            //    else hasErrors = false


               if(hasErrors) {
                   this.createErrorAlert('Debes llenar los campos obligatorios')
                   return false
               }
               else
                return true;
            }


            // --------------------------------------
            // Validate Erros second Tab
            // --------------------------------------
            validateFieldsSecondTab () {
                const { mainImage } = this;
                let hasErrors = false;

                if(mainImage === {} || mainImage === undefined || mainImage === null) {
                    hasErrors = true; 
                } else
                    hasErrors = false;
                


                if(hasErrors) {
                   this.createErrorAlert('Debes colocar la imagen principal');
                   return false
               }
               else
                return true;
            }



        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */

            // --------------------------------------
            // Render SubHeader
            // --------------------------------------
            renderSubHeader() {
                return <SubHeader 
                    headerTtitle={"Crear Anuncio"}
                    backgroundImage = {bgImage} />
            }

            // --------------------------------------
            // Render Breadcumbs
            // --------------------------------------
            renderBreadcumbs() {
                return <Breadcumbs />
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
            // Add Red Border to Control
            // --------------------------------------   
            addErrorStatus = (controlID)=> {
                const control = document.getElementById(controlID);
                control.classList.add('sr-errorStatus');
            }

            // --------------------------------------
            // Remove Error Status to Control
            // --------------------------------------
            removeErrorStatus = (controlID)=> {
                const control = document.getElementById(controlID);
                control.classList.remove('sr-errorStatus');
            }



            // --------------------------------------
            // Render Tipo de Anuncio Select
            // --------------------------------------
            renderTipoSelect (selectedAnuncio) {
				console.log('TCL: NewAnuncio -> renderTipoSelect -> selectedAnuncio', selectedAnuncio)
                const {tipoData} = this;
                let selectData = [];
				
                switch(selectedAnuncio) {
                    case "estándar" : selectData = tipoData.filter((tipo) => {return tipo.value === '1' || tipo.value === '2' });
                        break;
                    case "premium" : selectData = tipoData.filter((tipo) => {return tipo.value === '1' || tipo.value === '2' });
                        break;
                    case "clasico" : selectData = tipoData.filter((tipo) => {return tipo.value === '3' });
                        break;
                    case "agencias" : selectData = tipoData
                        break;
                    default : return
                }

                
                return (
                    <Select
                        defaultValue={selectData[0]}
                        isClearable={false}
                        isSearchable={false}
                        value = {this.state.selectedTipoVehiculo}
                        options={selectData}
                        id = {"tipoVehiculo"}
                        inputId  = {"tipoVehiculo"}
                        onChange = {this.handleSelectTipoVehiculoChange}
                        name={'searchTypeSelect'}
                    />
                )
            }


            // --------------------------------------
            // Render Marcas Select
            // Hanlde its State By its side
            // --------------------------------------
            renderMarcasSelect(marcas) {
                const { selectedMarca } = this.state;
                return (
                    <div className="input-group">
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={marcas[0]}
                            isClearable={false}
                            isSearchable={true}
                            name={'marcaSelect'}
                            id = {"marca"}
                            inputId  = {"marca"}
                            value={selectedMarca}
                            onChange={this.handleSelectMarcaChange}
                            options={this.formatSelectValues(marcas)}
                        />
                    </div>
                )
            }


            // --------------------------------------
            // Render Years Select
            // --------------------------------------		
            renderYearSelect() {
                const {selectedYear} = this.state;
                return (
                    <Select
                        isClearable={false}
                        isSearchable={true}
                        value = {selectedYear}
                        defaultValue = {selectedYear}
                        id = {"year"}
                        inputId  = {"year"}
                        onChange = {this.handleSelectYearsChange}
                        options={this.getyearsArray()}
                        name={'startYearSelect'} />

                );
            }


            // --------------------------------------
            // Render First Card
            // --------------------------------------
            renderFirstCard() {
                const {selectedAnuncio} = this.state;
				
                return (
                    <div className="row">
                        <h2 className = "sr-seccionTitle"> 2. Ingresa los detalles del veh&iacute;culo </h2>
                        <div className="col-md-12">
                            <div className="sr-cardContainer">
                                <div className="sr-cardHeader">
                                    <h4>
                                        Anuncio {selectedAnuncio} <br/>
                                        
                                    </h4>
                                </div>

                                <div className="sr-cardBody">

                                    {this.renderFormFieldsFirstCard()}

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


            // --------------------------------------
            // Render Second Card
            // --------------------------------------
            renderSecondCard() {
                return (
                    <div className="row">
                    <h2 className = "sr-seccionTitle">3. Im&aacute;genes del Veh&iacute;culo</h2>
                        <div className="col-md-12">
                            <div className="sr-cardContainer">
                                <div className="sr-cardHeader">
                                    <h4>
                                        Información del vehículo.
                                        Completa todos los datos, con ello tu anuncio tendrá más impacto
                                            </h4>
                                </div>

                                <div className="sr-cardBody">

                                    {this.renderFormFieldsSecondCard()}

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


            // --------------------------------------
            // Render Form Fields
            // --------------------------------------
            renderFormFieldsFirstCard() {

                const { 
                    newAnuncio, 
                    modelos, 
                    municipios,
                    selectedModelo, 
                    selectedMunicipio,
                    selectedAnuncio, 
                    selectedTransaccion,
                    selectedTransmision,
                    selectedColor,
                    selectedCombustible,
                    selectedEstado, 
                    selectedCondicion
                     } = this.state

                const { kilometraje, ultimoDigito, precio, telefono, propietarios} = newAnuncio;
                const { marcasData, ubicacionData, transaccionData, trasnmisionData, tipoCombustibleData, colorsData, condicionData } = this;
                return (
                    <div className="sr-formContainer">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="sr-input-group sr-mandatory">
                                    <label htmlFor="sr-ProjectName" className="grey-text">Tipo de Vehiculo*</label>
                                        {this.renderTipoSelect(selectedAnuncio)}
                                </div>
                            </div>


                            <div className="col-md-4" sm="12">
                                <div className="sr-input-group sr-mandatory">
                                    <label htmlFor="sr-ProjectName" className="grey-text">Marca *</label>
                                    {this.renderMarcasSelect(marcasData)}
                                </div>
                            </div>

                            <div className="col-md-4" sm="12">
                                <div className="sr-input-group sr-mandatory">
                                    <label className="grey-text">Modelo*</label>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={modelos[0]}
                                        isClearable={false}
                                        isSearchable={true}
                                        name={'brandSelect'}
                                        value={selectedModelo}
                                        id = {"modelo"}
                                        inputId  = {"modelo"}
                                        onChange={this.handleSelectModeloChange}
                                        options={this.formatSelectValues(modelos)}
                                    />

                                </div>
                            </div>
                        </div>

                        
                        <div className="row">

                            <div className="col-md-4" sm="12">
                                    <div className="sr-input-group sr-mandatory">
                                        <label className="grey-text">Condci&oacute;n del Veh&iacute;culo*</label>

                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={condicionData[0]}
                                            isClearable={false}
                                            isSearchable={true}
                                            id = {"condicion"}
                                            inputId  = {"condicion"}
                                            name={'brandSelect'}
                                            value={selectedCondicion}
                                            onChange={this.handleSelectCondicionChange}
                                            options={condicionData}
                                        />

                                    </div>
                                </div>


                            <div className="col-md-4" sm="12">
                                    <div className="sr-input-group">
                                        <label className="grey-text">Tipo de Combustible*</label>

                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={tipoCombustibleData[0]}
                                            isClearable={false}
                                            isSearchable={true}
                                            id = {"combustible"}
                                            inputId  = {"combustible"}
                                            name={'brandSelect'}
                                            value={selectedCombustible}
                                            onChange={this.handleSelecCombustibleChange}
                                            options={tipoCombustibleData}
                                        />

                                    </div>
                                </div>

                                <div className="col-md-4" sm="12">
                                    <div className="sr-input-group">
                                        <label className="grey-text">Color*</label>

                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={colorsData[0]}
                                            isClearable={false}
                                            isSearchable={true}
                                            id = {"color"}
                                            inputId  = {"color"}
                                            name={'color'}
                                            value={selectedColor}
                                            onChange={this.handleSelectColorChange}
                                            options={colorsData}
                                        />

                                    </div>
                                </div>


                              

                               
                        </div>


                        <div className="row">
                            <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectObjectives" className="grey-text">Año *</label>
                                    {this.renderYearSelect(selectedAnuncio)}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectOwner" className="grey-text">Estado</label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={{ value: 0, 'label': 'Selecciona el Estado' }}
                                        isClearable={false}
                                        isSearchable={true}
                                        id = {"estado"}
                                        inputId  = {"estado"}
                                        value={selectedEstado}
                                        options={this.formatSelectValues(ubicacionData)}
                                        name={'LocationSelect'}
                                        onChange={this.handleSelectUbicacionChange}
                                    />
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectOwner" className="grey-text">Ciudad</label>
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue = {municipios[0]} 
                                            isClearable={false}
                                            isSearchable={true}
                                            name = {'municipio'}
                                            id = {"municipio"}
                                            inputId  = {"municipio"}
                                            value={selectedMunicipio}
                                            onChange={this.handleSelectMunicipioChange}
                                            options={this.formatSelectValues(municipios)}
                                        />
                                </div>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-md-4">

                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Precio</label>

                                    <input 
                                        type="number" 
                                        className="form-control sm-searchInput" 
                                        placeholder="Precio" 
                                        min = "0"
                                        id = {"precio"}
                                        onChange={this.handleInputChange} 
                                        value={precio} 
                                        name={"precio"} />

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Tel&eacute;fono</label>

                                    <input 
                                        type="tel" 
                                        className="form-control sm-searchInput" 
                                        placeholder="tel" 
                                        pattern="[0-9]{3} [0-9]{3} [0-9]{4}" 
                                        maxLength="12"  
                                        title="Ten digits code" 
                                        id = {"telefono"}
                                        required
                                        onChange={this.handleInputChange} 
                                        value={telefono} 
                                        name={"telefono"} />

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Tipo de Transacci&oacute;n</label>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={transaccionData[0]}
                                        isClearable={false}
                                        isSearchable={false}
                                        name={'brandSelect'}
                                        id = {"transaccion"}
                                        inputId  = {"transaccion"}
                                        value={selectedTransaccion}
                                        onChange={this.handleSelectTranChange}
                                        options={transaccionData}
                                    />


                                </div>
                            </div>

                            

                        </div>

                        <div className="row">

                        <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Kilometraje</label>

                                    <input 
                                        type="number" 
                                        className="form-control sm-searchInput" 
                                        placeholder="Kilometros" 
                                        min = "0"
                                        id = {"kilometraje"}
                                        inputId  = {"kilometraje"}
                                        onChange={this.handleInputChange} 
                                        value={kilometraje} 
                                        name={"kilometraje"} />

                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Ultimo Numero de la Placa</label>

                                    <input 
                                        type="number" 
                                        className="form-control sm-searchInput" 
                                        placeholder="7" 
                                        id = {"ultimoDigito"}
                                        onChange={this.handleInputChange} 
                                        value={ultimoDigito} 
                                        name={"ultimoDigito"} />

                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Tipo de Trasmisi&oacute;n</label>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={trasnmisionData[0]}
                                        isClearable={false}
                                        isSearchable={false}
                                        name={'brandSelect'}
                                        id = {"transmision"}
                                        inputId  = {"transmision"}
                                        value={selectedTransmision}
                                        onChange={this.handleSelectTransmisionChange}
                                        options={trasnmisionData}
                                    />


                                </div>
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-md-4">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">N&uacute;mero de Propietarios</label>

                                    <input 
                                        type="number" 
                                        className="form-control sm-searchInput" 
                                        placeholder="Número de Propietarios" 
                                        onChange={this.handleInputChange} 
                                        id = {"propietarios"}
                                        value={propietarios} 
                                        name={"propietarios"} />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="sr-navButtons">

                                <div className="col-md-6">
                                    <AppButton
                                        buttonClass={"site-button button-lg btn-block "}
                                        buttonText={'Anterior'}
                                        onClick={this.changePrevTab} />
                                </div>
                                
                                <div className="col-md-6">
                                    <AppButton
                                        buttonClass={"site-button button-lg btn-block "}
                                        buttonText={'Siguiente'}
                                        onClick={this.changeNextTab} />
                                </div>
                                    

                            </div>
                        </div>
                    </div>
                )
            }

       

            // --------------------------------------
            // Render Form Fields
            // --------------------------------------
            renderFormFieldsSecondCard() {

                const {  selectedAnuncio, descripcion, selectedTipoManejo, selectedcarroceria, selectedVestiduras,equipamientoData} = this.state
                const { vestidurasData, tipoManejoData,carroceriaData } = this;

                const maxImages = this.setMaxImageAllowed(selectedAnuncio);
                // this.setState({maxImages})
                
                return (
                    <div className="sr-formContainer">
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="sr-ProjectName" className="grey-text">Descripcion</label>
                                <div className="input-group">
                                    <textarea 
                                        name="descripcion" 
                                        id="descripcion"  
                                        value = {descripcion} 
                                        className = "form-control" 
                                        cols="30" 
                                        rows="10" 
                                        onChange = {this.handleInputChange}
                                        style = {{width:'100%'}}>
                                    </textarea>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Vestiduras</label>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={vestidurasData[0]}
                                        isClearable={false}
                                        isSearchable={false}
                                        name={'brandSelect'}
                                        value={selectedVestiduras}
                                        id = {"vestiduras"}
                                        inputId  = {"vestiduras"}
                                        onChange={this.handleSelectVestidurasChange}
                                        options={vestidurasData}
                                    />


                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Tipo de Manejo</label>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={tipoManejoData[0]}
                                        isClearable={false}
                                        isSearchable={false}
                                        name={'brandSelect'}
                                        id = {"tipo_manejo"}
                                        inputId  = {"tipo_manejo"}
                                        value={selectedTipoManejo}
                                        onChange={this.handleSelectTipoManejoChange}
                                        options={tipoManejoData}
                                    />


                                </div>
                            </div>

                            <div className="col-md-6" >
                                    <div className="sr-input-group">
                                        <label className="grey-text">Tipo de Carrocer&iacute;a*</label>

                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={carroceriaData[0]}
                                            isClearable={false}
                                            isSearchable={true}
                                            name={'brandSelect'}
                                            id = {"carroceria"}
                                            inputId  = {"carroceria"}
                                            value={selectedcarroceria}
                                            onChange={this.handleSelectCarroceriaChange}
                                            options={carroceriaData}
                                        />

                                    </div>
                                </div>

                            <div className="col-md-6">
                                <div className="sr-input-group">
                                    <label htmlFor="sr-projectApprover" className="grey-text">Equipamiento</label>

                                     <OptionsBox options = {equipamientoData} onChange = {this.onCheckBoxChange} />


                                </div>
                            </div>
                        </div>


                        <div className="row" style = {{marginTop : 20}}>

                            <div className="col-md-4">
                                {this.renderMainImageUploader()}
                            </div>


                            <div className="col-md-8">
                                {this.renderImagesUploader(maxImages)}
                            </div>

                        </div>



                        <div className="row">
                            <div className="sr-navButtons">

                                <div className="col-md-6">
                                    <AppButton
                                        buttonClass={"site-button button-lg btn-block sr-bigButton"}
                                        buttonText={'Anterior'}
                                        onClick={this.changePrevTab}>
                    
                                    </AppButton>
                                </div>

                                <div className="col-md-6">
                                    <AppButton
                                        buttonClass={"site-button button-lg btn-block sr-bigButton"}
                                        buttonText={'Siguiente'}
                                        onClick={this.changeNextTab}>
                                        
                                    </AppButton>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


            // --------------------------------------
            // Render Confirmation
            // --------------------------------------
            renderConfirmation() {
                const {newAnuncio } = this.state;
                return <AnuncioConfimation anuncio = {newAnuncio} changePrevTab = {this.changePrevTab}/>
            }





            // --------------------------------------
            // Render Prices Table
            // --------------------------------------
            renderPrices() {
                const {tipoAnuncio} = this;
                return (
                    <div className= "row">
                        <h2 className = "sr-seccionTitle"> 1. Elige el mejor plan para tu anuncio </h2>
                            <PriceTable pricesData = {tipoAnuncio} onCardClick = {this.onCardClick}/>
                       
                    </div>
                )
            }


            // --------------------------------------
            // Render Main Image
            // --------------------------------------
            renderMainImageUploader() {
                
                return (
                    <div>
                    <label htmlFor="sr-ProjectName" className="grey-text">Imagen Principal </label>
                    <FilesManager 
                        onFileRemoved = {this.onFileRemoved}  
                        onFileAdded = {this.onFileAddedMain} 
                        preloadFiles = {this.preloadFiles}
                        maxFiles = {1}
                    />
                    </div>
                )
            }


            
            // --------------------------------------
            // Render Main Image
            // --------------------------------------
            renderImagesUploader(maxImages) {
                // const {maxImages} = this.state;
               
				console.log('TCL: NewAnuncio -> renderImagesUploader -> maxImages', maxImages)
                return (
                    <div>
                        <label htmlFor="sr-ProjectName" className="grey-text">Imagenes </label>
                        <FilesManager 
                                onFileRemoved = {this.onFileRemoved}  
                                onFileAdded = {this.handleFileAdded} 
                                preloadFiles = {this.preloadFiles}
                                maxFiles = {maxImages}
                        />
                    </div>
                )
            }




            renderFormSteps() {
                const { currentStep } = this.state;
                switch(currentStep) {
                    case 0 : return this.renderPrices();
                    case 1 : return this.renderFirstCard();
                    case 2 : return this.renderSecondCard();
                    case 3 : return this.renderConfirmation();
                    default : return this.renderPrices();
                }
            }



            // --------------------------------------
            // Render Projects
            // --------------------------------------
            renderNewAnuncio() {
                

                return (
                    <Fragment>

                        <div className="page-content" >

                            {this.renderSubHeader()}

                            {this.renderBreadcumbs()}

                            <div className="section-full content-inner bg-gray">
                                <div className="container">
                                    

                                    {this.renderFormSteps()}

                                    
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
                return isLoaded ? this.renderNewAnuncio() : this.renderLoader();
            }
    }



// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    NewAnuncio.propTypes = {
        props: PropTypes
    };



// --------------------------------------
// Export Component
// --------------------------------------
    export default NewAnuncio;