/* ==========================================================================
 * Body Card Component for all Projects View
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
    class BodyCard extends Component {

        constructor(props ) {
            super(props);
            this.state = {
                ownerSolution : ''
            }
        }



        // --------------------------------------
        // Look For Solution Owner
        // --------------------------------------
        componentDidMount () {
        
            let resources = this.props.project.resources;
            let owners = [];
            if(resources.length > 0) {
                resources.map((resource) => {
                    if(resource.OwnerSolution === true)
                    {
                        owners.push(resource);
                        this.setState({ownerSolution: owners[0].nameResource});
                    }
                })

          
            }
            else 
            {
                this.setState({ownerSolution: 'No Owner Found'});
            }
           
            
        }
    
        // --------------------------------------
        // Render Div With Background Image
        // --------------------------------------
        render() {

            return (
                <React.Fragment>
                     <div className="pti-projectInfo">


                     <div className="pti-cardBodyColumn">
                        <i className="material-icons pti-projectIcon">person</i>
                        <h5 className="pti-projectInfoText">Solution Owner:  <br/> {this.state.ownerSolution}</h5>
                     </div>

                     <div className="pti-cardBodyColumn">
                        <i className="material-icons pti-projectIcon">web</i>
                        <h5 className="pti-projectInfoText">Application Type: <br/> {this.props.project.ApplicationName}</h5>
                     </div>

                      <div className="pti-cardBodyColumn">
                        <i className="material-icons pti-projectIcon">bar_chart</i>
                        <h5 className="pti-projectInfoText">Progress: <br/> {this.props.project.PercenProgress}</h5>
                     </div>
                     
                        
                    </div>
                    

                </React.Fragment>
            )
        }

    }


// --------------------------------------
// Declare Project Props
// --------------------------------------
    BodyCard.propTypes = {
        project: PropTypes.object
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default BodyCard;

