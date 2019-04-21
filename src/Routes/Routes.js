/* ==========================================================================
 * Routes Definition  
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */


// --------------------------------------
// Import Views Components
// --------------------------------------
    import HomeView from '../Views/Home/Home';
    import ListResultsView from '../Views/Results/ListResults';
    import DetailsView from '../Views/Details/Details';
    import LoginView from '../Views/User/Login';
    import PrivacidadView from '../Views/Pages/AvisoDePrivacidad';
    import SeguridadView from '../Views/Pages/ConsejosDeSeguridad';
    import nuevoAnuncioRoute from '../Views/Anuncios/NewAnuncio';
    import UserHomeView from '../Views/User/UserHome';
    import NormaView from '../Views/Pages/norma';

// --------------------------------------
// Path
// --------------------------------------

    const path = '/Demo2';


// --------------------------------------
// Create JSON Routes Array
// Last Item is the Defualt Redirect
// From Home or / to Index View
// --------------------------------------
    const appNavigationRoutes = [
        {
            path : `${path}/`,
            exact : true,
            key : 'home-route',
            navBarName : 'Inicio',
            component : HomeView
        },
        {
            path : `${path}/ingresar`,
            exact : true,
            key : 'login-route',
            navBarName : 'Ingresar',
            component : LoginView,
            userLogged : false
        },
        {
            path : `${path}/mi-cuenta`,
            exact : true,
            key : 'login-route',
            navBarName : 'Mi Cuenta',
            component : UserHomeView,
            userLogged : true
        },
        {
            path : `${path}/registro`,
            exact : true,
            key : 'register-route',
            // navBarName : 'Registro',
            component : LoginView
        },
        {
            path : `${path}/nuevo-anuncio`,
            exact : true,
            key : 'nuevoAnuncio-route',
            navBarName : 'Crear Anuncio',
            component : nuevoAnuncioRoute

        },
        {
            path : `${path}/aviso-de-privacidad`,
            exact : true,
            key : 'privacidad-route',
            footerMenuName : 'Aviso de Privacidad',
            component : PrivacidadView
        },
        {
            path : `${path}/consejos-de-seguridad`,
            exact : true,
            key : 'seguridad-route',
            footerMenuName : 'Consejos de Seguridad',
            component : SeguridadView
        },
        {
            path : `${path}/norma-y-practicas-comerciales`,
            exact : true,
            key : 'norma-route',
            footerMenuName : 'NORMA y Prácticas comerciales',
            component : NormaView
        },
        {
            
            // path : `${path}/resultados/`,
            path : `${path}/resultados/`,
            exact: true,
            key : 'resultados-route',
            component : ListResultsView,
        },
        {
            path : `${path}/anuncio/:ID`,
            exact: false,
            key : 'producto-route',
            component : DetailsView,
        },
        {redirect:true, path:'/', to : `${path}/`, navbarName: 'Redirect', key : 'index-route' }
    ]

// --------------------------------------
// Export Routes
// --------------------------------------
    export default appNavigationRoutes;