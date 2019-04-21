/* ==========================================================================
 * Range Selects Using Custom Selects 
 * 13/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
import React, {
    Component,
    Fragment
} from 'react'
import PropTypes from 'prop-types'




// --------------------------------------
// Create Component
// --------------------------------------
    const RangeSelect = (props) => {

        const {startSelect,  endSelect } =  props;
        
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return ( 
            <Fragment>
                <div className="row">
                    <div className="col-lg-6">
                        <span className = "price sm-priceRange"> Desde </span>
                        {startSelect}
                    </div>
                    <div className="col-lg-6">
                        <span className = "pricen sm-priceRange"> Hasta </span>
                        {endSelect}
                    </div>
                </div>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
RangeSelect.propTypes = {
    startSelect: PropTypes.element,
    endSelect: PropTypes.element,
   
}


// --------------------------------------
// Export Component
// --------------------------------------
export default RangeSelect;