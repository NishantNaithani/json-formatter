import React from "react";

import { createSpace } from "../../helpers";

const NullComponent = ({ showKey, valueKey, space }) => {
  return (
    <div>
      {(showKey &&
        valueKey &&
        `${createSpace(space)}"${valueKey}": ${null},`) ||
        `${createSpace(space)}${null},`}
    </div>
  );
};

export default NullComponent;
