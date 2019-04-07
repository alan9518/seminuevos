/* ==========================================================================
** File Manager Component Using Drag & Drop
** Using React Dropzone https://github.com/react-dropzone/react-dropzone
** 30/01/2019
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
// Handle Config`
// --------------------------------------
    // const componentConfig = {
    //     iconFiletypes: ['.jpg', '.png', '.gif'],
    //     showFiletypeIcon: true,
    //     postUrl: '/uploadHandler'
    // };

    // const eventHandlers = { addedfile: (file) => console.log(file) }


    const componentConfig = {
        iconFiletypes: ['.jpg', '.gif', '.png'],
        showFiletypeIcon: true,
        postUrl: '/no-url'
    }


// --------------------------------------
// Create Functional Component
// --------------------------------------

    const FilesManager = (props) => { 

        const {maxFiles} = props;
        let myDropzone = null;
        
    // --------------------------------------
    // Event Handlers
    // --------------------------------------
        // const eventHandlers = {
            
        //     init: function (dropzone) {
        //         dropzone.autoDiscover = false;
        //         myDropzone = dropzone;
        //         props.preloadFiles(dropzone)
        //     },
        //     addedfile :  function (file) {
        //         props.onFileAdded(file, myDropzone)
        //     },
        //     removedfile : props.onFileRemoved
        //     // addedfile: this.handleFileAdded.bind(this),
        //     // removedfile: this.handleFileRemoved.bind(this)
        // }


        const eventHandlers = {
            init: function (dropzone) {
                myDropzone = dropzone;
                dropzone.autoDiscover = false;
                props.preloadFiles(dropzone);
            },
            addedfile: function (file) {
                props.onFileAdded(file, myDropzone);
            },
            removedfile: function (file) {
                // props.hasImage = false;
            },
            processing : function (file) {
                console.log('file processing', file);

                let newImageName =  new Date().getTime()
                console.log('newImageName', newImageName);

            }
        }



        const djsConfig = { 
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: false ,
            maxFiles : maxFiles

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
    FilesManager.propTypes = { 
        props : PropTypes 
    }; 
// --------------------------------------
// Export Component
// --------------------------------------
    export default FilesManager;