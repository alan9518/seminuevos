/* ==========================================================================
 * Results List Filtering and Sorting Options
 * 13/12/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React, { Component, Fragment }  from 'react';
    import {SingleSelect} from '../../Components';
    import PropTypes from 'prop-types'



// --------------------------------------
// Create Component Class
// --------------------------------------
    class ResultsSorting extends Component {

        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
        }


        // --------------------------------------
        // change current View
        // --------------------------------------
        changeCurrentView() {
            const {onClick} = this.props;
            onClick();
        }


        // --------------------------------------
        // Render ResultsSorting
        // --------------------------------------
        renderResultsSorting() {
            const {sortingOptions, listActive} = this.props;
            console.log('listActive', listActive);
            // const isActive = 
            return (
                <Fragment>
                    <div className = "filter-bar clearfix m-b30 p-lr15">

                            <div className = "pull-left  max-w400 ">
                                <SingleSelect 
                                    defaultValue = {sortingOptions[0]}
                                    isClearable={false}
                                    isSearchable={false}
                                    options={sortingOptions}
                                    name = {'sortingSelect'}
                                />
                            </div>

                        <ul className = "nav theme-tabs pull-right">
                            <li className = {listActive && 'active'}>
                                <a onClick = {this.props.onClick}><i className = "fa fa-list"></i></a>
                            </li>
                            <li className = {!listActive && 'active'}>
                                <a onClick = {this.props.onClick}><i className = "fa fa-th"></i></a>
                            </li>
                        </ul>
                    </div>
                </Fragment>
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderResultsSorting();
        }
    }


// --------------------------------------
// Define PropTypes
// --------------------------------------
// ResultsSorting.propTypes = {
// prop: PropTypes
// }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ResultsSorting; 