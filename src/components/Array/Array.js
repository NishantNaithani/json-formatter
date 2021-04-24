import React from "react";

import { createSpace } from "../../helpers";

const ArrayComponent = ({ valueKey, value, callback = () => {}, space }) => {
  const updatedValue = value.map((element, idx) =>
    callback({ key: idx, value: element, spacing: space + 4, showKey: false })
  );

  return (
    <div>
      <span>{`${createSpace(space)}"${valueKey}": [`}</span>
      {updatedValue}
      <span>{`${createSpace(space)}],`}</span>
    </div>
  );
};

export default ArrayComponent;
