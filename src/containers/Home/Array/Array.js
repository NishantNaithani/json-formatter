import React, { Component } from "react";

import { createSpace } from "../../../helpers";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

class ArrayComponent extends Component {
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
    const { valueKey, value, callback = () => {}, space } = this.props;

    const updatedValue = value.map((element, idx) =>
      callback({ key: idx, value: element, spacing: space + 4, showKey: false })
    );

    return (
      <div>
        <span>
          {`${createSpace(space)}`}
          {`"${valueKey}": `}
        </span>
        {(expanded && (
          <>
            <MdExpandMore onClick={this.handleExpansionClick} />
            <span>{"["}</span>
            {updatedValue}
            <span>
              {`${createSpace(space + 1)}`}
              {`],`}
            </span>
          </>
        )) || (
          <span>
            <MdExpandLess onClick={this.handleExpansionClick} />
            {`[...] (${value.length})`}
          </span>
        )}
      </div>
    );
  }
}

export default ArrayComponent;
