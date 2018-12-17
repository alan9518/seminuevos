/* ==========================================================================
 * Custom Accordion Component
 * Using  https://github.com/springload/react-accessible-accordion
 * 12/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react'
    import { Accordion } from 'react-accessible-accordion';
    import PropTypes from 'prop-types';
    import 'react-accessible-accordion/dist/fancy-example.css';
    import './styles.css';    



// --------------------------------------
// Create Component
// --------------------------------------
    const CustomAccordion = (props) => {

        const isAccordion = props.isAccordion;
        const children =  props.children;
        

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>

                <Accordion accordion = {isAccordion}>
                
                    {children}

                </Accordion>

            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
    // CustomAccordion.propTypes = {
    // prop: PropTypes
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default CustomAccordion; 