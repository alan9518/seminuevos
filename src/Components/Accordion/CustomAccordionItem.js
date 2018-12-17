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
    import {
        AccordionItem,
        AccordionItemTitle,
        AccordionItemBody,
    } from 'react-accessible-accordion';
    import PropTypes from 'prop-types';
    



// --------------------------------------
// Create Component
// --------------------------------------
    const CustomAccordionItem = (props) => {

        const {accordionTitle, expanded, children} =  props;

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <Fragment>
                    <AccordionItem expanded = {expanded}>
                        <AccordionItemTitle className="accordion__title accordion__title--animated ">
                            <h5 className="u-position-relative acord-title">
                                {accordionTitle}
                                <div className="accordion__arrow" role="presentation" />
                            </h5>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            {children}
                        </AccordionItemBody>
                    </AccordionItem>
            </Fragment>
        )
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// CustomAccordionItem.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
export default CustomAccordionItem; 