/* ==========================================================================
 * Small Slider Component 
 * Using react-slick
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component } from "react";
    // import 'slick-carousel/slick/slick.css';
    // import 'slick-carousel/slick/slick-theme.css';
    import Slider from 'react-slick';
    import PropTypes from "prop-types";

    


// --------------------------------------
// Create Component Class
// --------------------------------------
class SmallSlider extends Component {

    // --------------------------------------
    // Constructor
    // --------------------------------------
    constructor(props) {
        super(props);
    }

    
    // --------------------------------------
    // Render Slider
    // --------------------------------------
    renderSlider() {
        const baseUrl = 'http://carzone.dexignlab.com/xhtml/images/blog/grid'
        const settings = {
            customPaging: function(i) {
                return (
                    <a>
                        <img src={`${baseUrl}/pic${i + 1}.jpg`} />
                    </a>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className = "sm-smallSlider">
                <Slider {...settings}>
                <div>
                    <img src={baseUrl + "/pic1.jpg"} />
                </div>
                <div>
                    <img src={baseUrl + "/pic2.jpg"} />
                </div>
                <div>
                    <img src={baseUrl + "/pic3.jpg"} />
                </div>
                <div>
                    <img src={baseUrl + "/pic4.jpg"} />
                </div>
                </Slider>
            </div>
        );
    }

    // --------------------------------------
    // Render Component
    // --------------------------------------
    render() {
        return this.renderSlider();
    }
}

// --------------------------------------
// Define PropTypes
// --------------------------------------
// SmallSlider.propTypes = {
//     prop: PropTypes
// };

// --------------------------------------
// Export Component
// --------------------------------------
    export default SmallSlider;
