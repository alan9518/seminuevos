/* ==========================================================================
** Confirm Anuncio Data && Submit to DB
** 24/03/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import axios from 'axios';
    import { Endpoints } from '../../services/endpoints';
    import { AnuncioLabel, AppLoader, AppButton } from '../../Components';
    import PropTypes from 'prop-types';
    


// --------------------------------------
// Create Component Class
// --------------------------------------
    class AnuncioConfimation extends Component {

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
                    anuncioSaved : false
                }
                this.publish = this.publish.bind(this);
            }

            // --------------------------------------
            // Set Initial Values
            // --------------------------------------
            componentDidMount() {
                this.setState({isLoaded : true})
            }


        /* ==========================================================================
        ** API Connection
        ** ========================================================================== */

                // --------------------------------------
                // Publicar Anuncio
                // --------------------------------------
                async publish (event)  {
					console.log("TCL: AnuncioConfimation -> publish -> event", event)
                    const {anuncio} = this.props;
                    const {mainImage} = anuncio;

                    // this.setState({
                    //     anuncioSaved : true
                    // })


                      // Crear Anuncio
                    //   const currentUserData = JSON.parse(sessionStorage.getItem('userData'))
                    //   const crearAnuncioPromise = await this.saveAnuncio(anuncio, 45, 'http://carzone.dexignlab.com/xhtml/images/blog/grid/pic1.jpg', currentUserData)
                    //   const crearAnuncioData = await crearAnuncioPromise.data;
                    //   console.log("TCL: AnuncioConfimation -> publish -> crearAnuncioData", crearAnuncioData)
                    

					// console.log("TCL: AnuncioConfimation -> publish -> mainImage", mainImage)
                    // console.log("TCL: AnuncioConfimation -> anuncio", anuncio)

                    // Crear Vehiculo
                    const saveVehiculoPromise =  this.saveVehiculo(anuncio);
                   
                    // Guardar Imagenes
                    const uploadMainImagePromise =  this.uploadImage(mainImage);

                    // 
                    // const currentUserData = JSON.parse(sessionStorage.getItem('userData'))
                    
                    

                    // Run All Promises
                    const [saveVehiculoData, uploadMainImageData]  = await Promise.all([saveVehiculoPromise, uploadMainImagePromise])
                    const lastVehiculoID = saveVehiculoData.data;
                    const uploadMainImageURl = uploadMainImageData.data;


               
                    // Crear Anuncio
                      const currentUserData = JSON.parse(sessionStorage.getItem('userData'))
                      const crearAnuncioPromise = await this.saveAnuncio(anuncio, lastVehiculoID.last_Vehiculo, uploadMainImageURl.url, currentUserData)
                      const crearAnuncioData = await crearAnuncioPromise.data;
                      console.log("TCL: AnuncioConfimation -> publish -> crearAnuncioData", crearAnuncioData)

                  

                    // const crearAnuncioPromise = await this.saveAnuncio(anuncio, lastVehiculoID.last_Vehiculo, uploadMainImageURl.url, currentUserData)
                    // const crearAnuncioData = await crearAnuncioPromise.data;
                    // console.log("TCL: AnuncioConfimation -> publish -> crearAnuncioData", crearAnuncioData)
                    
                    // console.log("TCL: AnuncioConfimation -> publish -> lastVehiculoID", lastVehiculoID)
					// console.log("TCL: AnuncioConfimation -> publish -> uploadMainImageURl", uploadMainImageURl)


                    // console.log("TCL: AnuncioConfimation -> publish -> saveVehiculoData", saveVehiculoData)


                    
                    this.setState({anuncioSaved : true})


                }


                // --------------------------------------
                // Guardar Anuncio
                // --------------------------------------

                async saveVehiculo(anuncio) {
                  
                    // Create Form Data
                        const data = new FormData();
                            // data.set('marca' , nameUsuario)
                            data.set('marca' , anuncio.marca.value);
                            data.set('modelo' , anuncio.modelo.value);
                            data.set('tipo' , anuncio.tipo_vehiculo.value);
                            data.set('year' , anuncio.year.value);
                            data.set('kilometraje' , anuncio.kilometraje);
                            data.set('carroceria' , anuncio.carroceria.value);
                            data.set('transmision' , anuncio.transmision.value);
                            data.set('tipo_manejo' , anuncio.tipo_manejo.value);
                            data.set('combustible' , anuncio.tipo_combustible.value);
                            data.set('color' , anuncio.color.value);
                            data.set('vestiduras' , anuncio.vestiduras.value);
                            data.set('equipamento' , this.renderEquipamento(anuncio.equipamiento));

                    // Axios Request
                            return axios({
                                method: 'post',
                                url: Endpoints.addVehiculo,
                                data: data,
                                config: { headers : { 
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    }}
                                })
                           
                   
                }


                // --------------------------------------
                // Save Anuncio
                // --------------------------------------
                async saveAnuncio  (anuncio, idVehiculo, mainImageURL, userData ) {
					console.log("TCL: AnuncioConfimation -> saveAnuncio -> mainImage", mainImageURL)
                    console.log("TCL: AnuncioConfimation -> saveAnuncio -> idVehiculo", idVehiculo)

                    const  {id, tipoUsuario} = userData;
                    const titulo = `${anuncio.marca.label} ${anuncio.modelo.label} - ${anuncio.year.value}`;
                    const fechaCreado = new Date().toISOString().split('T')[0];
                    const fechaCierre =  this.addDaystoDate(fechaCreado, 10)
                    
                    // Create Form Data
                       const data = new FormData();
                       
                        data.set('id_tipo_anuncio', anuncio.id_tipo_anuncio);
                        data.set('id_vehiculo', idVehiculo)
                        data.set('id_vendedor', tipoUsuario === 'usuario' ? id : 0)
                        data.set('id_agencia', tipoUsuario === 'agencia' ? id : 0)
                        data.set('tipo_usuario', tipoUsuario)
                        data.set('titulo', titulo)
                        data.set('precio', anuncio.precio)
                        data.set('Descripcion', anuncio.descripcion)
                        data.set('imagen_destacada', mainImageURL)
                        data.set('fecha_creado', fechaCreado)
                        data.set('condicion_vehiculo', anuncio.condicion.value)
                        data.set('estado', anuncio.estado.value)
                        data.set('ciudad', anuncio.municipio.value)
                        data.set('propietarios', anuncio.propietarios)
                        data.set('fecha_cierre', anuncio.tipo_anuncio === 'estándar' || anuncio.tipo_anuncio === 'clásico'  ?  fechaCierre : null)
                        data.set('estado_anuncio', 'en venta')
                        data.set('anuncio_pagado', anuncio.tipo_anuncio === 'estándar' || anuncio.tipo_anuncio === 'clásico'  ?  'gratuito' : 'pagado')
                        data.set('precio_anuncio_pagado', anuncio.tipo_anuncio === 'estándar' || anuncio.tipo_anuncio === 'clásico'  ?  null : anuncio.precioAnuncio)
                        data.set('metodo_pago', anuncio.tipo_anuncio === 'estándar' || anuncio.tipo_anuncio === 'clásico'  ?  null : 'paypal')
                        // data.set('fecha_cierre', anuncio)
                        // data.set('fecha_cierre', anuncio)


                        // console.log("TCL: AnuncioConfimation -> saveAnuncio -> data", data)

                          // Axios Request
                          return axios({
                            method: 'post',
                            url: Endpoints.addAnuncio,
                            data: data,
                            config: { headers : { 
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                }}
                            })
                       
                  

                }
                

                // --------------------------------------
                // Upload Image
                // --------------------------------------
        
                async uploadImage(image) {
                    let formData = new FormData();
                    formData.append('file', image);
          
                    return axios.post(`http://localhost:8080/SR_seminuevos/backendFinal/WS/upload/upload.php`, 
                        formData,
                        {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                      }
                    )

                }

        /* ==========================================================================
        ** Handle State
        ** ========================================================================== */


                // --------------------------------------
                // Sumar Dias a la fecha de Creacion
                // --------------------------------------
                addDaystoDate(startDateString, days) {
                    //la fecha
                    // var TuFecha = new Date('01/01/2018');
                    let startDate =  new Date(startDateString);
                    
                    //dias a sumar
                    var daysToAdd = parseInt(days);
                    
                    //nueva fecha sumada
                    startDate.setDate(startDate.getDate() + daysToAdd);
                    console.log("TCL: AnuncioConfimation -> addDaystoDate -> startDate", startDate)
                    

                    return  startDate.toISOString().split('T')[0];
                    

                    //formato de salida para la fecha
                    // resultado.innerText = startDate.getDate() + '/' +
                    //   (startDate.getMonth() + 1) + '/' + startDate.getFullYear();
                  }

            
        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */

            // --------------------------------------
            // Render Anuncio Data
            // descripcion: undefined
            // estado: {value: undefined, label: "Selecciona el Estado"}
            // imagenes_Anuncio: []
            // kilometraje: null
            // marca: {value: undefined, label: "Selecciona la Marca"}
            // modelo: {value: undefined, label: "Selecciona el Modelo"}
            // municipio: {value: undefined, label: "Selecciona el Municipio"}
            // precio: null
            // telefono: null
            // tipo_anuncio: "estandar"
            // tipo_vehiculo: {value: "2", label: "Motos"}
            // transaccion: {value: undefined, label: "Selecciona el Tipo de Transaccion"}
            // ultimoDigito: null
            // year: {value: undefined, label: "Selecciona el Año"}
            // --------------------------------------
            renderAnuncioData(anuncioData) {
				console.log("TCL: AnuncioConfimation -> renderAnuncioData -> anuncioData", anuncioData)
                return (
                    <div className="sr-anuncioDataContainer">
                       
                       

                       
                        
                        
                       

                        <div className="sr-cardHeader"><h4> Imágenes  <br/></h4></div>


                        <div className="row">
                            <div className="sr-navButtons">

                                <div className="col-md-6">
                                    <AppButton
                                        buttonClass={"site-button button-lg btn-block "}
                                        buttonText={'Anterior'}
                                        onClick={this.props.changePrevTab} />
                                </div>
                                
                                <div className="col-md-6">
                                    <AppButton
                                        buttonClass={"site-button button-lg btn-block "}
                                        buttonText={'Publicar'}
                                        onClick={this.publish} />
                                </div>
                                    

                            </div>
                        </div>
                       
                    </div>
                )
            }

            // --------------------------------------
            // Iterate Images Data
            // --------------------------------------
            renderImageGallery(gallery) {
                return (
                    gallery.map((image)=> {
                        return<div className="sr-imageGalleryItem"> <img src = {image.dataURL} alt = {image.name} className = "img img-responsive"/>  </div>
                    })
                )
            }
           
            getUserMail() {
                const user = JSON.parse(sessionStorage.getItem('userData'))
                return user.emailUsuario;

            }

            // --------------------------------------
            // Render Equipamento
            // Return String split by comas
            // --------------------------------------
            renderEquipamento(equipamiento) {
                const values =  equipamiento.map((eq)=>{return eq.value})
				console.log("TCL: AnuncioConfimation -> renderEquipamento -> values", values)
                const stringValues = values.join(',');
				console.log("TCL: AnuncioConfimation -> renderEquipamento -> stringValues", stringValues)

                return stringValues
            }
          
            // --------------------------------------
            // Render Projects
            // --------------------------------------
            renderAnuncioConfimation() {
                
                const {anuncioSaved} = this.state;
                
                return (
                    <Fragment>

                    {
                        anuncioSaved === false ? this.renderAnuncioInfo() : this.renderSuccessMessage()
                    }
                    
                    </Fragment>
                )
            }


            // --------------------------------------
            // Render Anuncio Details && Submit Button
            // --------------------------------------
            renderAnuncioInfo() {
                const {anuncio } = this.props;
                const {anuncioSaved} = this.state;
				console.log("TCL: AnuncioConfimation -> renderAnuncioConfimation -> this.props", this.props)
                return  (
                    <div className="row">
                        <h2 className = "sr-seccionTitle"> 4. Confimar los Detalles del Anuncio</h2>
                        <div className="col-md-12">
                            <div className="sr-cardContainer">
                                

                                <div className="sr-cardBody">

                                    <div className="row">
                                            <div className="sr-cardHeader"><h4> Detalles del Veh&iacute;culo  <br/></h4></div>
                                            <div className="sr-detailsContainer">
                                                {anuncio.tipo_anuncio && <AnuncioLabel label = {"Tipo de Anuncio"} value = {anuncio.tipo_anuncio}/>    }
                                                {anuncio.tipo_vehiculo && <AnuncioLabel label = {"Tipo de Vehiculo"} value = {anuncio.tipo_vehiculo}/>    }
                                                {anuncio.modelo && <AnuncioLabel label = {"Modelo"} value = {anuncio.modelo}/>    }
                                                {anuncio.marca && <AnuncioLabel label = {"Marca"} value = {anuncio.marca}/>    }
                                                {anuncio.descripcion && <AnuncioLabel label = {"Descripción"} value = {anuncio.descripcion}/>    }
                                                {anuncio.condicion && <AnuncioLabel label = {"Condición"} value = {anuncio.condicion}/>    }
                                                {anuncio.propietarios && <AnuncioLabel label = {"Propietarios"} value = {anuncio.propietarios}/>    }
                                                {anuncio.year && <AnuncioLabel label = {"Año"} value = {anuncio.year}/>    }
                                                {anuncio.precio && <AnuncioLabel label = {"Precio"} value = {anuncio.precio}/>    }
                                                {anuncio.transaccion && <AnuncioLabel label = {"Tipo de Transacción"} value = {anuncio.transaccion}/>    }
                                                {anuncio.kilometraje && <AnuncioLabel label = {"Kilometraje"} value = {anuncio.kilometraje}/>    }
                                                {anuncio.transmision && <AnuncioLabel label = {"Tipo de Transmisión"} value = {anuncio.transmision}/>    }
                                                {anuncio.tipo_manejo && <AnuncioLabel label = {"Tipo de Manejo"} value = {anuncio.tipo_manejo}/>    }
                                                {anuncio.equipamiento && <AnuncioLabel label = {"Equipamento"} value = {this.renderEquipamento(anuncio.equipamiento)}/>    }
                                                {anuncio.tipo_combustible && <AnuncioLabel label = {"Combustible"} value = {anuncio.tipo_combustible}/>    }
                                                {anuncio.carroceria && <AnuncioLabel label = {"Carrocería"} value = {anuncio.carroceria}/>    }
                                                {anuncio.color && <AnuncioLabel label = {"Color"} value = {anuncio.color}/>    }
                                            </div>
                                    </div>


                                    <div className="row">
                                        <div className="sr-cardHeader"><h4> Ubicación  <br/></h4></div>
                                        <div className="sr-detailsContainer">
                                            {anuncio.estado && <AnuncioLabel label = {"Estado"} value = {anuncio.estado}/>    }
                                            {anuncio.municipio && <AnuncioLabel label = {"Ciudad"} value = {anuncio.municipio}/>   }
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="sr-cardHeader"><h4> Contacto  <br/></h4></div>
                                        <div className="sr-detailsContainer">
                                            {anuncio.telefono && <AnuncioLabel label = {"Telefono"} value = {anuncio.telefono}/>    }
                                            {anuncio.municipio && <AnuncioLabel label = {"Correo"} value = {this.getUserMail()}/>   }
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="sr-cardHeader"><h4> Im&aacute;genes  <br/></h4></div>
                                        <div className="col-md-4 col-sm-12">
                                            <h4> Imagen Principal</h4>
                                            <div className="sr-imageGalleryItem">
                                                <img src = {anuncio.mainImage.dataURL} alt={anuncio.mainImage.name} className = "img img-responsive"/>
                                            </div>
                                        </div>

                                        <div className="col-md-8 col-sm-12">
                                            <h4> Galer&iacute;a de Im&aacute;genes</h4>
                                            <div className="sr-imageGallery">
                                                {this.renderImageGallery(anuncio.imagenes_Anuncio)}
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row">
                                        <div className="sr-navButtons">

                                            <div className="col-md-6">
                                                <AppButton
                                                    buttonClass={"site-button button-lg btn-block sr-bigButton"}
                                                    buttonText={'Volver'}
                                                    onClick={this.props.changePrevTab}>
                                
                                                </AppButton>
                                            </div>

                                            <div className="col-md-6">
                                                <AppButton
                                                    buttonClass={"site-button button-lg btn-block sr-bigButton"}
                                                    buttonText={'Publicar'}
                                                    onClick={this.publish}>
                                                    
                                                </AppButton>
                                            </div>
                                        </div>
                                    </div>
                                

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            // --------------------------------------
            // Render Success Message
            // --------------------------------------
            renderSuccessMessage() {
                return  (
                    <div className="row">
                        <h2 className = "sr-seccionTitle"> 4. Confimar los Detalles del Anuncio</h2>
                        <div className="col-md-12">
                            <div className="sr-cardContainer">
                                

                                <div className="sr-cardBody">


                                    <h1>  Tu anuncio ha sido publicado </h1>

                                 

                                    <AppButton
                                        buttonClass={"site-button button-lg btn-block sr-bigButton"}
                                        buttonText={'Ver Anuncio'}
                                        onClick={this.props.changePrevTab}>
                                    </AppButton>




                                   {/* <div className="row">
                                        <div className="sr-navButtons">

                                            <div className="col-md-6">
                                                <AppButton
                                                    buttonClass={"site-button button-lg btn-block sr-bigButton"}
                                                    buttonText={'Volver'}
                                                    onClick={this.props.changePrevTab}>
                                
                                                </AppButton>
                                            </div>

                                            <div className="col-md-6">
                                                <AppButton
                                                    buttonClass={"site-button button-lg btn-block sr-bigButton"}
                                                    buttonText={'Publicar'}
                                                    onClick={this.publish}>
                                                    
                                                </AppButton>
                                            </div>
                                        </div>
                                    </div>
                                */}

                                </div>
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
                return isLoaded ? this.renderAnuncioConfimation() : this.renderLoader();
            }
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    AnuncioConfimation.propTypes = {
        props: PropTypes
    };
    
// --------------------------------------
// Export Component
// --------------------------------------
    export default AnuncioConfimation;