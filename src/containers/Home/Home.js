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
      <div style={{ fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center" }}>JSON FORMATTER</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <JSONCollector
            json={json}
            error={error}
            handleChange={this.handleChange}
          />
          <div
            style={{
              border: "1px solid black",
              width: "50%",
              height: "820px",
              alignSelf: "flex-end",
              overflow: "auto",
            }}
          >
            <JSONViewer
              json={finalJSON}
              show={show}
              error={error}
              errorMessage={"Passed JSON string is not valid!"}
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            disabled={!json.length}
            onClick={this.handleSubmit}
            buttonText={"PARSE STRING"}
          />
        </div>
      </div>
    );
  }
}

export default Home;
