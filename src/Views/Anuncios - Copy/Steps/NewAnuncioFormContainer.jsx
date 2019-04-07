/* ==========================================================================
** New Anuncio Component Lauyout
** 11/02/2019
** Alan Medina Silva
** ========================================================================== */



// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment } from "react";
    import { AppButton ,  AnuncioDetails, CardContainer } from '../../../Components';
    import axios from 'axios';
    import PropTypes from "prop-types";
    import '../styles.css';

// --------------------------------------
// Store The Input values
// --------------------------------------
    let newAnuncio = {};



// --------------------------------------
// Create Component
// --------------------------------------
    class NewAnuncio extends Component {

        // --------------------------------------
        // Constructor
        // Create New Project Object
        // Or get ir from DB
        // --------------------------------------
        constructor(props) {
            super(props)
            this.state = {
                formStep: 1,
                progressLevel: "33.3333%",
                activeClasses: [true, false, false],
            }

            newAnuncio = this.props.anuncio;
            

        }

        // --------------------------------------
        // Render Initial Tab
        // --------------------------------------
        setFormView() {
            switch (this.state.formStep) {
                case 1:
                    return <AnuncioDetails
                        fieldValues={newAnuncio}
                        nextStep={this.changeNextTab}
                        saveValues={this.saveValues}
                    />

                // case 2:
                //     return <ProjectDates
                //         fieldValues={newAnuncio}
                //         nextStep={this.changeNextTab}
                //         previousStep={this.changePreviousTab}
                //         saveValues={this.saveValues}
                //     />

                // case 3:
                //     return <ProjectConfirmation
                //         fieldValues={newAnuncio}
                //         previousStep={this.changePreviousTab}
                //         saveValues={this.saveValues}
                //         history={this.props.history}
                //     />
                default :   return <AnuncioDetails
                        fieldValues={newAnuncio}
                        nextStep={this.changeNextTab}
                        saveValues={this.saveValues}
                    />
            }
        }

        // --------------------------------------
        // Change Next Form Tab
        // --------------------------------------
        changeNextTab = () => {

            let newProgress = (33.3333 * (this.state.formStep + 1));
            let newClasses = this.changeActiveClass(this.state.formStep) || this.state.activeClasses;

            this.setState((prevState) => {
                return {
                    formStep: prevState.formStep + 1,
                    progressLevel: `${newProgress}%`,
                    activeClasses: newClasses
                }
            });

            console.log(this.state);
        }

        // --------------------------------------
        // Change Previous Form Tab
        // --------------------------------------
        changePreviousTab = (saveValues, fieldValues) => {

            if (saveValues)
                this.saveValues(fieldValues);

            let newProgress = (33.3333 * (this.state.formStep - 1));
            let newClasses = this.returnActiveClass(this.state.formStep) || this.state.activeClasses;
            this.setState((prevState) => {
                return {
                    formStep: prevState.formStep - 1,
                    progressLevel: `${newProgress}%`,
                    activeClasses: newClasses
                }
            });
        }


        // --------------------------------------
        // Change Next Active Class
        // --------------------------------------
        changeActiveClass(index) {

            let classesArray = this.state.activeClasses;
            classesArray[index - 1] = !this.state.activeClasses[index - 1];
            classesArray[index] = !this.state.activeClasses[index];

            return classesArray;
        }

        // --------------------------------------
        // Change Prev Active Class
        // --------------------------------------
        returnActiveClass(index) {

            let classesArray = this.state.activeClasses;
            classesArray[index - 1] = !this.state.activeClasses[index - 1];
            classesArray[index - 2] = !this.state.activeClasses[index - 2];

            return classesArray;
        }


        // --------------------------------------
        // Save Values
        // `newAnuncio` is set at the top of this file, we are simply appending
        // to and overriding keys in `newAnuncio` with the `fields` with Object.assign
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        // --------------------------------------
        saveValues(fields) {
            return function () {
                newAnuncio = Object.assign({}, newAnuncio, fields)
                console.log(newAnuncio);
            }()
        }



        /* ==========================================================================
        *  Render Methods
        ========================================================================== */



        // --------------------------------------
        // Navigation Buttons
        // --------------------------------------
        renderNavigationButtons() {
            if (this.state.formStep === 1) {
                return (
                    <div className="pti-navButtons">
                        <AppButton outline color="primary" onClick={this.changeNextTab}>Next</AppButton>
                    </div>
                )

            }
            else if (this.state.formStep === 2) {
                return (
                    <div className="pti-navButtons">
                        <AppButton outline color="primary" onClick={this.changePreviousTab} style={{ marginRight: '20px' }}>  Back </AppButton>
                        <AppButton outline color="primary" onClick={this.changeNextTab}>Next  </AppButton>
                    </div>
                )
            }

            else {
                return (
                    <div className="pti-navButtons">
                        <AppButton outline color="primary" onClick={this.changePreviousTab} style={{ marginRight: '20px' }}>Back</AppButton>
                        <AppButton outline color="primary">Save</AppButton>
                    </div>
                )
            }

        }





        // --------------------------------------
        // Render form Container
        // --------------------------------------
        renderNewAnuncioForm() {
            return (
                <Fragment>
                    <div className="page-content" >
                        <div className="section-full content-inner bg-white contact-style-1">
            
                            <form >
                                {this.setFormView()}
                            </form>
                        
                        </div>

                    </div>
                </Fragment>
            )
        }






        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return (

                this.renderNewAnuncioForm()
            )
        }
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
NewAnuncio.propTypes = {
prop: PropTypes
};

// --------------------------------------
// Export Component
// --------------------------------------
export default NewAnuncio;
