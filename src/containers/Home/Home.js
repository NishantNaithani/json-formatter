import React, { Component } from "react";

import { JSONCollector } from "./JSONCollector";
import { JSONViewer } from "./JSONViewer";

import { Button } from "../../components/Button";

import { isJSONString } from "../../helpers";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { json: "", error: false, show: false, finalJSON: "" };
  }

  handleSubmit = () => {
    const { json } = this.state;
    if (isJSONString(json.trim())) {
      this.setState({
        show: true,
        finalJSON: json,
      });
    } else {
      this.setState({
        error: true,
        show: false,
      });
    }
  };

  handleChange = (jsonValue) => {
    this.setState((prevState) => {
      return {
        json: jsonValue,
        ...(prevState.json.length &&
          prevState.error && { error: !prevState.error }),
      };
    });
  };

  render() {
    const { json, finalJSON, error, show } = this.state;
    return (
      <div>
        <JSONCollector
          json={json}
          error={error}
          handleChange={this.handleChange}
        />
        <JSONViewer json={finalJSON} show={show} />
        <Button
          disabled={!json.length}
          onClick={this.handleSubmit}
          buttonText={"PARSE"}
        />
      </div>
    );
  }
}

export default Home;
