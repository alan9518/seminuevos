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
    // constructor(props) {
    //     super(props);
    // }


    setImagenDestacada  (imagen_destacada)  {
        if(imagen_destacada.indexOf('http') >=0 ) 
            return imagen_destacada
        else{
            let imagenNameArray =  imagen_destacada.split('../');
           
            let imagenRelativeRouteName = imagenNameArray[2];
            let imageRoute = `http://localhost:8080/SR_seminuevos/backendFinal/${imagenRelativeRouteName}`;
        
            return imageRoute
        }
    }

    
    // --------------------------------------
    // Render Slider
    // --------------------------------------
    renderSlider() {
        const baseUrl = 'http://carzone.dexignlab.com/xhtml/images/blog/grid'
        const {imagesData} = this.props;
        // console.log("TCL: SmallSlider -> renderSlider -> imagesData", imagesData);
        const context = this;
        const settings = {
            customPaging: function(i) {
				console.log("TCL: SmallSlider -> renderSlider -> i", i)
                return (
                    // <a>
                    //     <img src={`${baseUrl}/pic${i + 1}.jpg`} />
                    // </a>

                 
                                    <a>
                                        <img src={context.setImagenDestacada(imagesData[i].ruta_imagen)} />
                                    </a>
                            
                    
                );

                // return (
                //       imagesData.map((image)=> {
				// 		console.log('TCL: SmallSlider -> renderSlider -> image', image)
                //         return (
                //             <a>
                //                 <img src={context.setImagenDestacada(image.ruta_imagen)} alt = {image.ruta_imagen}/>
                //             </a>
                //         )
                //     })
                // );
                  
                // );
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
                {
                    
                    imagesData && imagesData.map((image)=> {
						
                        return (
                            <div>
                                <img src={this.setImagenDestacada(image.ruta_imagen)} alt = {image.ruta_imagen}/>
                            </div>
                        )
                    })
                }
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
