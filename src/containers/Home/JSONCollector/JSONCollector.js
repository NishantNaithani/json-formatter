import React, { Component } from "react";

import { TextArea } from "../../../components/TextArea";

class JSONCollector extends Component {
  handleChange = (value) => {
    this.props.handleChange(value);
  };

  render() {
    const { json, error } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextArea
          label={"Paste your stringified JSON here:"}
          rows="50"
          cols="100"
          required
          value={json}
          onChange={this.handleChange}
          error={error}
          errorMessage={"Please pass the correct stringified JSON string!"}
        />
      </div>
    );
  }
}

export default JSONCollector;
