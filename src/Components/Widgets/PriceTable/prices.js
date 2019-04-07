// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
// --------------------------------------
// Create Functional Component
// --------------------------------------
const prices = (props) => {
    return (

        // 	// <div className="section-full about-us bg-white content-inner-2" style="background-image: url(images/background/about-us.jpg); background-position:bottom; background-repeat:no-repeat; background-size:100%;">
        // 	<div className="section-full about-us bg-white content-inner-2" >
        // 	<div className="container">
        // 		<div className="section-head text-center head-1">
        // 			<span className="text-primary">Welcome To Our Website</span>
        // 			<h3 className="h3 text-uppercase">Car Dealership</h3>
        // 			<div className="dlab-separator bg-gray-dark"></div>
        // 			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
        // 		</div>
        // 		<div className="row">
        // 			<div className="col-md-3 col-sm-6  col-xs-6">
        // 				<div className="dlab-box-bg m-b30 box-hover" style={{backgroundImage: "url(images/our-work/work/pic1.jpg)"}}>
        // 					<div className="icon-bx-wraper center p-lr20 p-tb30">
        // 						<div className="text-primary m-b20"> 
        // 							<span className="icon-cell"><i className="glyph-icon flaticon-steering-wheel"></i></span> 
        // 						</div>
        // 						<div className="icon-content">
        // 							<h4 className="dlab-tilte text-uppercase">All brands</h4>
        // 							<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
        // 						</div>
        // 					</div>
        // 					<div className="icon-box-btn text-center">
        // 						<a href="#" className="site-button btn-block">Read More</a>
        // 					</div>
        // 				</div>
        // 			</div>
        // 			<div className="col-md-3 col-sm-6 col-xs-6">
        // 				<div className="dlab-box-bg m-b30 box-hover"  style={{backgroundImage: "url(images/our-work/work/pic1.jpg)"}}>
        // 					<div className="icon-bx-wraper center p-lr20 p-tb30">
        // 						<div className="text-primary m-b20"> 
        // 							<span className="icon-cell"><i className="glyph-icon flaticon-speech-bubble"></i></span> 
        // 						</div>
        // 						<div className="icon-content">
        // 							<h4 className="dlab-tilte text-uppercase">Free Support</h4>
        // 							<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
        // 						</div>
        // 					</div>
        // 					<div className="icon-box-btn text-center">
        // 						<a href="#" className="site-button btn-block">Read More</a>
        // 					</div>
        // 				</div>
        // 			</div>

        // 			<div className="col-md-3 col-sm-6 col-xs-6">
        // 				<div className="dlab-box-bg m-b30 box-hover"  style={{backgroundImage: "url(images/our-work/work/pic1.jpg)"}}>
        // 					<div className="icon-bx-wraper center p-lr20 p-tb30">
        // 						<div className="text-primary m-b20"> 
        // 							<span className="icon-cell"><i className="glyph-icon flaticon-list"></i></span> 
        // 						</div>
        // 						<div className="icon-content">
        // 							<h4 className="dlab-tilte text-uppercase">affordable</h4>
        // 							<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
        // 						</div>
        // 					</div>
        // 					<div className="icon-box-btn text-center">
        // 						<a href="#" className="site-button btn-block">Read More</a>
        // 					</div>
        // 				</div>
        // 			</div>
        // 		</div>
        // 	</div>

        // </div>

        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="dlab-box-bg m-b30 box-hover active" style={{ backgroundImage: "url(images/our-work/work/pic1.jpg)" }}>
                <div className="icon-bx-wraper center p-lr20 p-tb30">
                    <div className="text-primary m-b20">
                        <span className="icon-cell"><i className="glyph-icon flaticon-mechanic"></i></span>
                    </div>
                    <div className="icon-content">
                        <h4 className="dlab-tilte text-uppercase">Dealership</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                    </div>
                </div>
                <div className="icon-box-btn text-center">
                    <a href="#" className="site-button btn-block">Read More</a>
                </div>
            </div>
        </div>
    )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
prices.propTypes = {
    props: PropTypes
};
// --------------------------------------
// Export Component
// --------------------------------------
export default prices;