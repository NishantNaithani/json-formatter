import React, { Component } from "react";

import { TextArea } from "../../../components/TextArea";

class JSONCollector extends Component {
  handleChange = (value) => {
    this.props.handleChange(value);
  };

  render() {
    const { json } = this.props;
    return (
      <TextArea
        placeholder={"Paste your stringified JSON here"}
        rows="47"
        cols="100"
        required
        value={json}
        onChange={this.handleChange}
      />
    );
  }
}

export default JSONCollector;
