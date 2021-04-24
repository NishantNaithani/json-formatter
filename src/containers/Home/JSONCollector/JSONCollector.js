import React, { Component } from "react";

import { TextArea } from "../../../components/TextArea";

class JSONCollector extends Component {
  handleChange = (value) => {
    this.props.handleChange(value);
  };

  render() {
    const { json } = this.props;
    return (
      <div>
        <TextArea
          placeholder={"Paste your stringified JSON here"}
          rows="50"
          cols="150"
          required
          value={json}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default JSONCollector;
