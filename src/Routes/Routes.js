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


// --------------------------------------
// Path
// --------------------------------------

    const path = '';


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
            path : `${path}/mi-cuenta/ingresar`,
            exact : true,
            key : 'login-route',
            navBarName : 'Ingresar',
            component : LoginView
        },
        {
            path : `${path}/mi-cuenta/registro`,
            exact : true,
            key : 'register-route',
            // navBarName : 'Registro',
            component : LoginView
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
            path : `${path}/resultados/`,
            exact: false,
            key : 'resultados-route',
            component : ListResultsView,
        },
        {
            path : `${path}/vehiculo/:ID`,
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