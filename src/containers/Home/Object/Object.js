import React, { Component } from "react";

import { createSpace } from "../../../helpers";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

class ObjectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };
  }

  handleExpansionClick = () => {
    this.setState((prevState) => {
      return {
        expanded: !prevState.expanded,
      };
    });
  };

  render() {
    const { expanded } = this.state;
    const {
      valueKey,
      value,
      callback = () => {},
      space,
      showKey,
      initial,
    } = this.props;

    const updatedValue = Object.keys(value).map((newKey) =>
      callback({
        key: newKey,
        value: value[newKey],
        spacing: space + 4,
        showKey: true,
      })
    );

    return (
      <div>
        <span>
          {`${createSpace(space)}`}
          {(showKey && `"${valueKey}": `) || ``}
        </span>
        {(expanded && (
          <>
            <MdExpandMore onClick={this.handleExpansionClick} />
            <span>{"{"}</span>
            {updatedValue}
            <span>
              {`${createSpace(space + 1)}`}
              {(!initial && `},`) || `}`}
            </span>
          </>
        )) || (
          <span>
            <MdExpandLess onClick={this.handleExpansionClick} />
            {`{...}`}
          </span>
        )}
      </div>
    );
  }
}

export default ObjectComponent;
