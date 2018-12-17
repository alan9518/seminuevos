/* ==========================================================================
 * StickyHeader Component 
 * 16/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component
// --------------------------------------
    const StickyHeader = () => {


        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                
    <header className="site-header header-transparent">
		<div className="top-bar">
			<div className="container">
				<div className="row">
					<div className="dlab-topbar-left">
						<ul>
							<li><a href="on-road-price.html" >Get On Road Price</a></li>
							<li><a href="page-faq.html" >Ask a Question</a></li>
						</ul>
					</div>
					<div className="dlab-topbar-right topbar-social">
						<ul>
							<li>
								<a href="javascript:void(0);"><i className="fa fa-envelope-o"></i> Support@website.com</a>
							</li>
							<li><a href="#" className="site-button-link facebook hover"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" className="site-button-link google-plus hover"><i className="fa fa-google-plus"></i></a></li>
							<li><a href="#" className="site-button-link twitter hover"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" className="site-button-link linkedin hover"><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
        <div className="sticky-header main-bar-wraper">
            <div className="main-bar clearfix ">
                <div className="container clearfix">
                    
                    <div className="logo-header mostion">
						<a href="index.html"><img src="images/logo-light.png" className="logo" alt=""/></a>
					</div>
                    
                    <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed" aria-expanded="false" > 
						<i className="fa fa-bars"></i>
					</button>
                    
                    <div className="extra-nav">
                        <div className="extra-cell">
                            <button id="quik-search-btn" type="button" className="site-button-link"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    
                    <div className="dlab-quik-search bg-primary ">
                        <form action="#">
                            <input name="search" value="" type="text" className="form-control" placeholder="Type to search"/>
                            <span id="quik-search-remove"><i className="fa fa-close"></i></span>
                        </form>
                    </div>
                    
                    <div className="header-nav navbar-collapse collapse">	
						<ul className="nav navbar-nav">
							<li className="active has-mega-menu demos"> <a href="index.html">Home</a></li>
							<li><a href="javascript:;">New<i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li> <a href="javascript:;">Search Cars <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="new-car-search.html">Search Car</a></li>
											<li><a href="new-car-search-result-list.html">Search Result List</a></li>
											<li><a href="new-car-search-result-column.html">Search Result Column</a></li>
										</ul>
									</li>
									<li><a href="new-car-latest.html">Latest Cars</a></li>
									<li><a href="new-car-popular.html">Popular Cars</a></li>
									<li><a href="new-car-upcoming.html">Upcoming Cars</a></li>
									<li> <a href="javascript:;">Dealers & Service Centers <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="car-dealers.html">Car Dealers</a></li>
											<li><a href="car-service-center.html">Service Center</a></li>
										</ul>
									</li>
									<li><a href="on-road-price.html">On Road Price</a></li>
								</ul>
							</li>
							<li><a href="javascript:;">Used<i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li> <a href="javascript:;">In My City <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="used-car-search-result.html">New York City</a></li>
											<li><a href="used-car-search-result.html">Chicago</a></li>
											<li><a href="used-car-search-result.html">Los Angeles</a></li>
											<li><a href="used-car-search-result.html">Boston</a></li>
											<li><a href="used-car-search-result.html">San Francisco</a></li>
											<li><a href="used-car-search-result.html">Washington</a></li>
											<li><a href="used-car-search-result.html">Seattle</a></li>
											<li><a href="used-car-search-result.html">Philadelphia</a></li>
											<li><a href="used-car-search-result.html">Austin</a></li>
											<li><a href="used-car-search-result.html">Detroit</a></li>
										</ul>
									</li>
									<li><a href="javascript:;">Search Car <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="used-car-search.html">Search Car</a></li>
											<li><a href="used-car-search-result.html">Search Car Result</a></li>
											<li><a href="used-car-details.html">Used Car Detail</a></li>
										</ul>
									
									</li>
									<li><a href="used-car-details.html">Used Car Detail</a></li>
									<li><a href="used-car-sell.html">Sell Your Car</a></li>
									<li><a href="used-car-valuation.html">Car Valuation</a></li>
									
								</ul>
							</li>
							<li><a href="javascript:;">Compare<i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="compare-car.html">Compare Car</a></li>
									<li><a href="compare-car-result.html">Compare Car Result</a></li>
									<li><a href="write-review.html">Write Review</a></li>
									<li><a href="car-review.html">Car Review</a></li>
								</ul>
							</li>
							<li><a href="javascript:;">Car Detail<i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="car-details-overview.html">Car Detail</a></li>
									<li><a href="car-detail-specifications.html">Car Specifications</a></li>
									<li><a href="car-detail-price.html">Car Price</a></li>
									<li><a href="car-detail-compare.html">Car Compare</a></li>
									<li><a href="car-detail-pictures.html">Car Pictures</a></li>
								</ul>
							</li>
							<li className="has-mega-menu "> <a href="javascript:;">Pages<i className="fa fa-chevron-down"></i></a>
								<ul className="mega-menu">
									<li> <a href="javascript:;">Page</a>
										<ul>
											<li><a href="page-about.html">About Us</a></li>
											<li><a href="page-career.html">Career</a></li>
											<li><a href="page-services.html">Services</a></li>
											<li><a href="page-privacy-policy.html">Privacy Policy</a></li>
										</ul>
									</li>
									<li> <a href="javascript:;">Page</a>
										<ul>
											<li><a href="page-help.html">Help</a></li>
											<li><a href="page-faq.html">Faq's</a></li>
											<li><a href="page-error-404.html">404 Page</a></li>
											<li><a href="page-contact.html">Contact 1</a></li>
										</ul>
									</li>
									<li> <a href="javascript:;">Blog Page</a>
										<ul>
											<li><a href="blog-grid-2.html">Grid 2</a></li>
											<li><a href="blog-grid-2-sidebar.html">Grid 2 sidebar</a></li>
											<li><a href="blog-grid-3.html">Grid 3</a></li>
											<li><a href="blog-grid-3-sidebar.html">Grid 3 sidebar</a></li>
										</ul>
									</li>
									<li> <a href="javascript:;">Blog Page</a>
										<ul>
											<li><a href="blog-single.html">Single</a></li>
											<li><a href="blog-single-sidebar.html">Single sidebar</a></li>
											<li><a href="blog-half-img-sidebar.html">Half image sidebar</a></li>
											<li><a href="blog-large-img-sidebar.html">Large image sidebar</a></li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
                </div>
            </div>
        </div>
        
    </header>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// StickyHeader.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
    export default StickyHeader; 