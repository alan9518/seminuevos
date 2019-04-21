/* ==========================================================================
** Destacad Batch Component
** 20/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PropTypes from 'prop-types';
    import './styles.css';
// --------------------------------------
// Create Functional Component
// --------------------------------------
const Destacado = (props) => {
    return (
        <div class="sr-featuredContainer"><div class="sr-featuredContainer__content  ">PREMIUM</div></div>
    )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    Destacado.propTypes = {
        props: PropTypes
    };
// --------------------------------------
// Export Component
// --------------------------------------
    export default Destacado;