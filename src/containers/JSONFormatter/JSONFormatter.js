import React, { Component } from "react";
import { TextArea } from "../../components/TextArea";

class JSONFormatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      // errorMessage: "Please pass the correct stringified JSON string!",
      stringifiedJSON: "",
      formattedJSON: null,
    };
  }

  handleChange = (value) => {
    value = value.trim();
    if (value.length) {
      this.setState((prevProps) => {
        if (prevProps.stringifiedJSON.length && prevProps.error) {
          return {
            error: !prevProps.error,
            stringifiedJSON: value,
          };
        }

        return {
          stringifiedJSON: value,
        };
      });
    }
  };

  handleSubmit = () => {
    try {
      const { stringifiedJSON } = this.state;
      const parsedJSON = JSON.parse(stringifiedJSON);
      this.setState({
        error: false,
        formattedJSON: parsedJSON,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  };

  formatJSON = () => {
    const { error, formattedJSON } = this.state;
    if (formattedJSON && !error) {
      return formattedJSON;
    }

    return "";
  };

  render() {
    const { stringifiedJSON, error } = this.state;

    return (
      <div>
        <TextArea
          label={"Paste your stringified JSON here:"}
          placeholder={
            '{"name":"Nishant Naithani","age":24,"profession":"Engineer"}'
          }
          rows="50"
          cols="100"
          required
          onChange={this.handleChange}
          error={error}
          errorMessage={"Please pass the correct stringified JSON string!"}
        />
        {/* {error && <p>Please pass the correct stringified JSON string!</p>} */}
        <br />
        <button
          disabled={!stringifiedJSON.length || error}
          onClick={this.handleSubmit}
        >
          Parse String
        </button>
        <br />
        <textarea
          id="input_data"
          rows="50"
          cols="100"
          disabled
          value={this.formatJSON()}
        />
      </div>
    );
  }
}

export default JSONFormatter;
