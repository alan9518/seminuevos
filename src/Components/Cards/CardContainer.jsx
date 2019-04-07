/* ==========================================================================
 * General Card Component for ProjectView Component
 * 20/06/2018
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
    class CardContainer extends Component {




        // --------------------------------------
        // Render Div With Background Image
        // --------------------------------------
        render() {
            const {cardTitle, edit} = this.props;
            return (
                <React.Fragment>
                <div className="pti-pvbProjectCard pti-shadow">
                    
                    <div className="pti-pvbProjectHeader">
                        <h4 className="pti-pvbProjectTitle">{cardTitle}</h4>
                        {edit && <i className="material-icons pti-editCard">edit</i>}
                        
                    </div>

                    <div className="pti-pvbProjectBody">

                        {this.props.children}

                    </div>

                    <div className="pti-pvbProjectFooter">
                        
                    </div>

                </div>
                    

                </React.Fragment>
            )
        }

    }


// --------------------------------------
// Declare Project Props
// --------------------------------------
    CardContainer.propTypes = {
        cardTitle : PropTypes.string,
        edit : PropTypes.bool
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default CardContainer;

