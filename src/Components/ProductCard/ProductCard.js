/* ==========================================================================
 * Product Card Component 
 * 15/12/2018
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
    const ProductCard = () => {
    
        
        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                <div className="dlab-feed-list">
                    <div className="dlab-media"> 
                    	<a href="new-car-search-result-column.html"><img src="http://carzone.dexignlab.com/xhtml/images/blog/default/thum1.jpg" alt=""/></a> 
                    </div>
                    <div className="dlab-info">
                    	<h4 className="dlab-title"><a href="new-car-search-result-column.html">Hyundai santa fe sport </a></h4>
                    	<div className="dlab-separator bg-black"></div>
                    	<p className="dlab-price"><del>$40,152</del> <span className="text-primary">$26,598</span></p>
                    </div>
                    <div className="icon-box-btn text-center">
                    	<ul className="clearfix">
                    		<li>2017</li>
                    		<li>Manual</li>
                    		<li>210 hp </li>
                    	</ul>
                    </div>
                </div>
            </Fragment>
        )
    }
 
 
 // --------------------------------------
 // Define PropTypes
 // --------------------------------------
//  ProductCard.propTypes = {
//      prop: PropTypes
//  }
 
 
 // --------------------------------------
 // Export Component
 // --------------------------------------
    export default ProductCard; 