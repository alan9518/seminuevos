/* ==========================================================================
 * Custom Single Option Select Component 
 * Using react-CustomSelect 
 * 15/11/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
  import React, { Component } from "react";
  import PropTypes from "prop-types";
  import CreatableSelect from 'react-select/lib/Creatable';

  import Select from 'react-select';
  import './styles.css';

// --------------------------------------
// Create Component Class
// --------------------------------------
class CustomSelect extends Component {
  /* ==========================================================================
  ** Component Setup
  ** ========================================================================== */
  // --------------------------------------
  // Constructor
  // --------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  // --------------------------------------
  // Set Initial Values
  // --------------------------------------
  componentDidMount() {
  }

  // --------------------------------------
  // Set Initial Values
  // --------------------------------------
  // handleChange = (newValue, actionMeta) => {
  //   console.group('Value Changed');
  //   console.log(newValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };

  // --------------------------------------
  // Set Initial Values
  // --------------------------------------
  // handleInputChange = (inputValue, actionMeta) => {
  //   console.group('Input Changed');
  //   console.log(inputValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };




  /* ==========================================================================
  ** Render Methods
  ** ========================================================================== */
    // --------------------------------------
    // Render Projects
    // --------------------------------------
    renderCustomSelect() {
      return (
        <CreatableSelect
          onChange={this.props.handleChange}
          onInputChange={this.props.handleInputChange}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={this.props.defaultValue}
          isDisabled={this.props.isDisabled}
          isLoading={this.props.isLoading}
          isClearable={this.props.isClearable}
          isRtl={this.props.isRtl}
          isSearchable={this.props.isSearchable}
          name={this.props.name}
          options={this.props.options}
        />
      )
    }
    // --------------------------------------
    // Render Component
    // --------------------------------------
    render() {
      return this.renderCustomSelect();
    }
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
// CustomSelect.propTypes = {
//   props: PropTypes
// };
// --------------------------------------
// Export Component
// --------------------------------------
export default CustomSelect;