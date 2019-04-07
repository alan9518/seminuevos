/* ==========================================================================
 * Image Card Component 
 * 19/06/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, {Component} from 'react';
    import PropTypes from 'prop-types';


// --------------------------------------
// Create Component
// --------------------------------------
class ImageCard extends Component {

    // --------------------------------------
    // Render Div With Background Image
    // --------------------------------------
    render() {

        let bgStyle = {
            backgroundImage: `url(${this.props.image})` ,
            backgroundSize: 'cover',
            width: '100%',
            height: '180px',
            borderTopLeftRadius: 'calc(.25rem - 1px)',
            borderTopRightRadius: 'calc(.25rem - 1px)'
        }


        return (
               <div className="projectImage" style={bgStyle}></div>
        )
    }

}


// --------------------------------------
// Declare Project Props
// --------------------------------------
    ImageCard.propTypes = {
        image : PropTypes.string
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ImageCard;

