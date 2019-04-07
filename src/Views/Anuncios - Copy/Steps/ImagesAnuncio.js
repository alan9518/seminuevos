/* ==========================================================================
** Upload Imagenes Anuncio
** 13/02/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import DropzoneComponent from 'react-dropzone-component';
    import './dropzone.min.css';
    import PropTypes from 'prop-types';



// --------------------------------------
// Handle Config
// --------------------------------------
// const componentConfig = {
//     iconFiletypes: ['.jpg', '.png', '.gif'],
//     showFiletypeIcon: true,
//     postUrl: '/uploadHandler'
// };

// const eventHandlers = { addedfile: (file) => console.log(file) }


const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.git'],
    showFiletypeIcon: true,
    postUrl: '/no-url'
}


// --------------------------------------
// Create Functional Component
// --------------------------------------

const ImagesAnuncio = (props) => { 


// --------------------------------------
// Event Handlers
// --------------------------------------
    const eventHandlers = {
        init: function (dropzone) {
            dropzone.autoDiscover = false;
            props.preloadFiles(dropzone)
            // props.preloadFiles(dropzone)
            // props.pre
            // context.preloadFiles(dropzone);
        },
        addedfile : props.onFileAdded,
        removedfile : props.onFileRemoved
        // addedfile: this.handleFileAdded.bind(this),
        // removedfile: this.handleFileRemoved.bind(this)
    }

    const djsConfig = { 
        addRemoveLinks: true,
        autoProcessQueue: false 
    }


    return ( 
        <DropzoneComponent 
            config={componentConfig}
            eventHandlers={eventHandlers}
            djsConfig={djsConfig} />
    )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    ImagesAnuncio.propTypes = { 
        props : PropTypes 
    }; 

// --------------------------------------
// Export Component
// --------------------------------------
    export default ImagesAnuncio;