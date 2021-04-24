import React from "react";

import { createSpace } from "../../helpers";

const StringComponent = ({ valueKey, value, space, showKey }) => {
  return (
    <div>
      {(showKey &&
        valueKey &&
        `${createSpace(space)}"${valueKey}": "${value}",`) ||
        `${createSpace(space)}"${value}",`}
    </div>
  );
};

export default StringComponent;
