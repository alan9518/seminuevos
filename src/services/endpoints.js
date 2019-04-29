/* ==========================================================================
 * Endopoints Address File 
 * 28/11/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
// import {Config} from '../Config';

// --------------------------------------
// Path Route
// --------------------------------------
    // const {path} = Config

    // const path = 'https://srseminuevos.com/server'
    const path = 'http://localhost:8080/SR_seminuevos/backendFinal/WS'
    const staticPath = 'http://srseminuevos.com/server';

// --------------------------------------
// Create Endpoints Object
// --------------------------------------
    export const Endpoints = {

    /* ==========================================================================
     *  WebService EndPoints
     ========================================================================== */
        // --------------------------------------
        // Get All Products
        // --------------------------------------
            getAllMarcas : `${path}/Marca/getMarcas.php`,
            // getAllMarcas : 'https://srseminuevos.com/server/Marca/getMarcas.php',
            
        // --------------------------------------
        // Get Marcas By Name
        // marca_id=3
        // --------------------------------------
            // getModelosByMarca : 'http://localhost:8080/SR_seminuevos/backendFinal/WS/Modelo/getModelosByMarca.php',
            getModelosByMarca : `${path}/Modelo/getModelosByMarca.php`,
        
        /** --------------------------------------
        // Get Products By Category
        // @param {customerid <String>}
        // --------------------------------------*/
            getAllModelos : `${path}/Modelo/getModelos.php`,
        
        // --------------------------------------
        // Get All Categories
        // --------------------------------------
            getAllEstados : `${path}/Estado/getEstados.php`,

        // --------------------------------------
        // Get Count for Pagination all Anuncios
        // --------------------------------------
            getAnunciosCount : `${path}/Anuncios/getAnunciosCount.php`,


         // --------------------------------------
        // Get Count for Pagination all Anuncios
        // --------------------------------------
            getUserAnunciosCount : `${path}/Anuncios/getUserAnunciosCount.php`,




        // --------------------------------------
        // Get Count for Pagination with Params
        // --------------------------------------
            getAnunciosCountWithSearchParams :  `${path}/Anuncios/getAnunciosCountAllParams.php`,
        
       /** --------------------------------------
       // GET All Anuncios
       // @param {page}
       // -------------------------------------- */
            getAllAnuncios : `${path}/Anuncios/getAllAnuncios.php`,


        /** --------------------------------------
         * GET All Anuncios With QUery Params
        // @param {}
        // @returns {}
        // -------------------------------------- */
            getAllAnunciosWithParams : `${path}/Anuncios/getAllAnunciosWithParams.php`, 
        
                
        /** --------------------------------------
        // Get Anuncio Details
        // @param {searchCat <String>}
        // @param {idToSearch <int>}
        // @param {startPage <int>}
        // @param {endPage <int>}
        // --------------------------------------*/
            getAnunciosByUser : `${path}/Anuncios/getAnunciosByUser.php`,
            
        
        /** --------------------------------------
        // Get Anuncio Details
        // @param {id_anuncio <String>}
        // --------------------------------------*/
            getAnuncioDetails : `${path}/Anuncios/getAnuncioDetails.php`,
            


         /** --------------------------------------
        // Get Anuncio Details
        // @param {relatedMarca <int>}
        // --------------------------------------*/
            getRelatedAnuncios : `${path}/Anuncios/getRelatedAnuncios.php`,
        
        
        /** --------------------------------------
        // Get Images Details
        // @param {id_anuncio <String>}
        // --------------------------------------*/
            getImagenesAnuncio : `${path}/Anuncios/getImagenesAnuncio.php`,
            
        /** --------------------------------------
        // Get User Seller Contact Info
        // @param {id_anuncio }
        // --------------------------------------*/
            getUsuarioDetailsContact : `${path}/Usuarios/getUsuarioDetailsContact.php`,

        
        /** --------------------------------------
        // Get User Detils By Mail
        // @param {correo_usuario }
        // --------------------------------------*/        
            getUserDetails : `${path}/Usuarios/getUserDetails.php`,
        
        /** --------------------------------------
        // Get Agency Contact Info
        // @param {partid <String> }
        // --------------------------------------*/
            getAgenciaDetailsContact : `${path}/Agencias/getAgenciaDetailsContact.php`,

        /** --------------------------------------
        // Get Agency Contact Info
        // @param {id_estado <String> }
        // --------------------------------------*/
            getMunicipiosByEstado : `${path}/Municipios/getMunicipios.php`,

        /** --------------------------------------
        // User login
        // @param {correo_usuario <String>}
        // @param {pass_usuario <String>}
        // --------------------------------------*/
            loginUser : `${path}/Usuarios/loginUsuario.php`,


        /** --------------------------------------
        // Agency login
        // @param {correo_usuario <String>}
        // @param {pass_usuario <String>}
        // --------------------------------------*/
            loginAgency : `${path}/Agencias/loginAgencia.php`,

        /** --------------------------------------
        // Register User
        // @param {correo_usuario <String>}
        // @param {nombre_usuario <String>}
        // @param {apellidos_usuario <String>}
        // @param {tel_usuario <String>}
        // @param {pass_usuario <String>}
        // --------------------------------------*/
            registerUser : `${path}/Usuarios/addUsuario.php`,

        // --------------------------------------
        // GET All Vehiculos
        // --------------------------------------        
            getVehiculos : `${path}/Vehiculos/getVehiculos.php`,
        
        // --------------------------------------
        // Save Vehiculo
        // --------------------------------------
            
            addVehiculo : `${path}/Vehiculos/addVehiculo.php`,


        // --------------------------------------
        // Save Vehiculo
        // --------------------------------------
            
            addAnuncio : `${path}/Anuncios/AddAnuncio.php`,


        // --------------------------------------
        // Upload Image
        // --------------------------------------
            
            uploadImage :`${path}/upload/upload.php`,

        /** --------------------------------------
        // Save Anuncio Images
        // @param {id_anuncio <int>}
        // @param {ruta_imagen <String>}
        // --------------------------------------*/
            saveAnuncioImage : `${path}/Anuncios/saveImagesAnuncio.php`,

        /* ==========================================================================
        ** Send Emails
        ** ========================================================================== */
        
            // --------------------------------------
            // Send Anuncio Created Email
            // --------------------------------------
                anuncioCreatedConfEmail : `${staticPath}/Email/AnuncioConfirmation.php`,
            
            // --------------------------------------
            // Send Anuncio Created Email
            // --------------------------------------
                contactVendedor : `${staticPath}/Email/ContactoVendedor.php`,
            

    }