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
            getModelosByMarca : 'http://localhost:8080/SR_seminuevos/backendFinal/WS/Modelo/getModelosByMarca.php',
            // getModelosByMarca : `${path}/Modelo/getModelosByMarca.php`,
        
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
        // Get Sub Categories
        // --------------------------------------
            getAllAnuncios : `${path}/Anuncios/getAllAnuncios.php`,
        
        /** --------------------------------------
        // Get Anuncio Details
        // @param {id_anuncio <String>}
        // --------------------------------------*/
            getAnuncioDetails : `${path}/Anuncios/getAnuncioDetails.php`,
        
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
        // Get Agency Contact Info
        // @param {partid <String> }
        // --------------------------------------*/
            getAgenciaDetailsContact : `${path}/Agencias/getAgenciaDetailsContact.php`,

        /** --------------------------------------
        // Get Tab Values
        // @param {partid <String>}
        // @param {busstypeid <String>}
        // --------------------------------------*/
            getTabAttributes : 'https://spapps.flex.com/wsxplorit/xploreitservices.asmx/getTabAttributes',

    }