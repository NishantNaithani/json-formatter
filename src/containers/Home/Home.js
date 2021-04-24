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
      <div className="container">
        <h1 className="center">JSON FORMATTER</h1>
        <div className="main">
          <div className="json_collector">
            <JSONCollector
              json={json}
              error={error}
              handleChange={this.handleChange}
            />
          </div>
          <div className="json_viewer">
            <JSONViewer
              json={finalJSON}
              show={show}
              error={error}
              errorMessage="Passed JSON string is not valid!"
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div className="center">
          <Button
            disabled={!json.length}
            onClick={this.handleSubmit}
            buttonText="PARSE STRING"
          />
        </div>
      </div>
    );
  }
}

export default Home;
