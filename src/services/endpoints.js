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
        // Get Product Details
        // @param {partid <String>}
        // --------------------------------------*/
            getProduct : 'https://spapps.flex.com/wsxplorit/xploreitservices.asmx/getSingleProduct',
        
        /** --------------------------------------
        // Get Related Products
        // @param {customerid <String>}
        // @param {keyword <String array>, split by coma}
        // --------------------------------------*/
            getRelatedProducts : `https://spapps.flex.com/wsxplorit/xploreitservices.asmx/getRelatedPro`,

            
        /** --------------------------------------
        // Get Related Products
        // @param {customerid <String>}
        // @param {keyword <String array>, split by coma}
        // --------------------------------------*/
            getRelatedProductsHard : `https://spapps.flex.com/wsxplorit/xploreitservices.asmx/getRelatedPro?customerid=1014&keyword=MDM,Master%20Data,Reference%20Data,%20GDH`,
        
        /** --------------------------------------
        // Get Product Attributes Tabs
        // @param {partid <String> }
        // --------------------------------------*/
            getProductTabs : 'https://spapps.flex.com/wsxplorit/xploreitservices.asmx/getTabs',

        /** --------------------------------------
        // Get Tab Values
        // @param {partid <String>}
        // @param {busstypeid <String>}
        // --------------------------------------*/
            getTabAttributes : 'https://spapps.flex.com/wsxplorit/xploreitservices.asmx/getTabAttributes',

    }