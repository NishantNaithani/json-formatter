import React from "react";

import { createSpace } from "../../helpers";

const BooleanComponent = ({ valueKey, value, space, showKey }) => {
  return (
    <div>
      {(showKey &&
        valueKey &&
        `${createSpace(space)}"${valueKey}": ${value},`) ||
        `${createSpace(space)}${value},`}
    </div>
  );
};

export default BooleanComponent;
