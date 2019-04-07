/* ==========================================================================
** Pagination Item
** 06/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PropTypes from 'prop-types';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const PaginationItem = (props) => {
        const {onItemClick, pageCounter, showArrow, arrowPosition, isActive} = props;
	
        const className = isActive ? 'site-button sr-paginationButton active' : 'site-button sr-paginationButton';
        return (
            <li  > 
                {
                    showArrow === false ? 
                        <button name = {pageCounter} className = {className} value = {pageCounter} onClick = {onItemClick}> {pageCounter}  </button>
                    :   <button name = {pageCounter} className = {className} value = {pageCounter} onClick = {onItemClick}> <i className = {`fa fa-angle-double-${arrowPosition}`} >   </i> </button>
                }
                
            </li>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PaginationItem.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default PaginationItem;