/* ==========================================================================
 * Footer Card Component 
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
class FooterCard extends Component {

    constructor(props ) {
        super(props);
    }


    // --------------------------------------
    // Render User Profile Pics
    // --------------------------------------
    renderUsers () {
       
        let resources = this.props.resources;
        let profileImage = '';

        if(resources) {

            return (
                resources.slice(0,4).map((resource,index) => {
                    profileImage = `https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=${encodeURIComponent(resource.emailResource)}`
                      return (
                           
                                <a href={`#${resource.nameResource}`}>
                                    <img src={profileImage} 
                                         alt={resource.nameResource}
                                         title={resource.nameResource} 
                                         key={`pti-resource-${resource.nameResource}-${index}`}
                                         className="pti-userImageMin pti-rounded"/>
                                </a>
                            
                      )  
                })
            )
        }
        else {
            return (<p> No Resources Found </p>)
        }
       
    }


    // --------------------------------------
    // Render Div With Background Image
    // --------------------------------------
    render() {

        // --------------------------------------
        // Render Component
        // --------------------------------------
        return (
            <React.Fragment>
                 <div className="pti-projectResources">

                     <div className="pti-projectUsers">
                        <h5 className="flexGrow1">Resources</h5>
                        <div className="pti-usersGroup">
                            {this.renderUsers()}
                        </div>
                     </div>

                </div>
                

            </React.Fragment>
        )
    }

}


// --------------------------------------
// Declare Project Props
// --------------------------------------
    FooterCard.propTypes = {
        image : PropTypes.string,
        resources : PropTypes.array
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default FooterCard;

