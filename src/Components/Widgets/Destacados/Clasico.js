/* ==========================================================================
** Anuncio Clasico Batch Component
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
    const {grid} =  props;
    const classNames = grid === true ? 'sr-featuredContainerGrid' : 'sr-featuredContainer';
    return (
        <div class={classNames}><div class="sr-featuredContainer__content-red">Clásico</div></div>
    )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Destacado.propTypes = {
    grid: PropTypes.bool
};
// --------------------------------------
// Export Component
// --------------------------------------
export default Destacado;