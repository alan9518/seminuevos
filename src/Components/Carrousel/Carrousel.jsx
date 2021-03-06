/* ==========================================================================
 * Custom Carrousel Component 
 * Using React Slick
 * 15/12/2018
 * Alan Medina Silva
 ========================================================================== */



// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component } from "react";
    import PropTypes from "prop-types";
    import Slider from 'react-slick';
    import {ProductCard} from '../index';

// --------------------------------------
// Create Component Class
// --------------------------------------
class Carrousel extends Component {
    

    // --------------------------------------
    // Constructor
    // --------------------------------------
        constructor(props) {
            super(props);
            this.settings = {
                dots: true,
                infinite: true,
                arrows : true,
                speed: 500,
                // slidesToShow: this.props.itemsToShow - 1,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: this.props.itemsToShow,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
                
            }
        }


    // --------------------------------------
    // Create Carrousel Item
    // --------------------------------------
    createCarrouselItem(carrouselItem, index, itemsToShow) {
        
        return (
            <div key = {index} className={`col-lg-12 col-md-12 col-sm-12 ${itemsToShow <= 4 && 'xpl-cardStyleCenter'}`} >
                <ProductCard  vehicle = {carrouselItem}/>
            </div>
        )
    }


    // --------------------------------------
    // Render Carrousel 
    // --------------------------------------
    renderCarrousel() {
        const {carrouselData, itemsToShow} = this.props;

        return (
            <Slider {...this.settings}>
            {
                carrouselData.map((carrouselItem,index) => {
					console.log("TCL: Carrousel -> renderCarrousel -> carrouselItem", carrouselItem)
                    return  (
                        this.createCarrouselItem(carrouselItem, index, itemsToShow)
                        
                    )
                    
                })

            }
            </Slider>
        )
    }


    // --------------------------------------
    // Render Component
    // --------------------------------------
        render() {
            return this.renderCarrousel();
        }
    }

// --------------------------------------
// Define PropTypes
// --------------------------------------
// Carrousel.propTypes = {
//     prop: PropTypes
// };

// --------------------------------------
// Export Component
// --------------------------------------
export default Carrousel;
;