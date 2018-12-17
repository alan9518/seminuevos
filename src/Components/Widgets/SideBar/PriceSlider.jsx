/* ==========================================================================
 * Price Slider SideBar Widget
 * Using react-input-range
 * 13/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import InputRange from 'react-input-range';
    import PropTypes from "prop-types";
    import 'react-input-range/lib/css/index.css';
    import './styles.css'

// --------------------------------------
// Create Component Class
// --------------------------------------
    class PriceSlider extends Component {
        
        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
            this.state = {
                value: { min: 500, max: 5000 },
            };
        }

        // --------------------------------------
        // Render PriceSlider
        // --------------------------------------
        renderPriceSlider() {
            const {value} =  this.state;
            return (
                <Fragment>
                    <div className="price-slide range-slider m-b30">
                        <div className="price sm-priceRange">
                        	<label htmlFor="amount">Precio</label>
                        	<input type="text" id="amount" className="amount" readOnly value = {`$ ${value.min} - $ ${value.max}`} />
                            <InputRange
                                formatLabel={value => `$ ${value}`}
                                maxValue={9999}
                                minValue={500}
                                value={value}
                                onChange={value => this.setState({ value })} 
                            />
                        </div>
                    </div>
                </Fragment>
            )        
        }
        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderPriceSlider();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
    // PriceSlider.propTypes = {
    // prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
    export default PriceSlider;
