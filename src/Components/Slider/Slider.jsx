/* ==========================================================================
 * Custom Slider Component 
 * Using https://github.com/erichbehrens/react-animated-slider
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component } from "react";
    import Slider from 'react-animated-slider';
    import 'react-animated-slider/build/horizontal.css';
    import  './custom.css';
    import PropTypes from "prop-types";
    import Slide1 from '../../images/Slider/slide1.jpg'
    import Slide2 from '../../images/Slider/slide2.jpg'

// --------------------------------------
// Create Component Class
// --------------------------------------
    class CustomSlider extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
        }

        // --------------------------------------
        // Custom Slider
        // --------------------------------------
        renderCustomSlider() {
            const content = [
                {
                    title: 'Vulputate Mollis Ultricies',
                    description:
                        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                    button: 'Read More',
                    image : Slide1,
                    user: 'Daniel',
                    userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
                },
                {
                    title: 'Tortor Dapibus',
                    description:
                        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    button: 'Discover',
                    image : Slide2,
                    user: 'Samantha',
                    userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
                },
            ];
                return (
                    <div>
                        <Slider  >
                            {content.map((item, index) => (
                                <div
                                    key={index}
                                    className={"sliderContent"}
                                    style={{ background: `url('${item.image}') no-repeat center center` }}
                                >
                                    <div className={"inner"}>
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <button>{item.button}</button>
                                    </div>
                                    <section>
                                        <img src={item.userProfile} alt={item.user} />
                                        <span>
                                            Posted by <strong>{item.user}</strong>
                                        </span>
                                    </section>
                                </div>
                            ))}
                        </Slider>
                    </div>
                );
        }

        // --------------------------------------
        // Render Slider
        // --------------------------------------
        renderSlider() {
            const content = [
                {
                    title: 'Vulputate Mollis Ultricies',
                    description:
                        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                    button: 'Read More',
                    image : Slide1,
                    user: 'Daniel',
                    userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
                },
                {
                    title: 'Tortor Dapibus',
                    description:
                        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    button: 'Discover',
                    image : Slide2,
                    user: 'Samantha',
                    userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
                },
            ];
                return (
                    <div className = 'sm-fullScreenSlider'>
                        <Slider autoplay = {2000} infinite = {true}>
                            {content.map((item, index) => (
                                <div
                                    key={index}
                                    className={"sliderContent"}
                                    style={{ background: `url('${item.image}') no-repeat center center` }}
                                >
                                    <div className={"inner"}>
                                    
                                    </div>
                                </div>
                            ))}
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
    // CustomSlider.propTypes = {
    //     prop: PropTypes
    // };

// --------------------------------------
// Export Component
// --------------------------------------
export default CustomSlider;
