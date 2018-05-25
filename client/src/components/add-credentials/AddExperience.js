import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { TextFielldGroup } from "../common/TextFieldGroup";
import { TextAreaFielldGroup } from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddExperience extends Component {
  constructor(props) {
    super();
    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: "",
      description: "",
      errors: {},
      disabled: false
    };
  }
  render() {
    return <div />;
  }
}

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateProps)(withTourter(AddExperience));
