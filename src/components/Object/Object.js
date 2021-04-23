import React from "react";

import { createSpace } from "../../helpers";

const ObjectComponent = ({ valueKey, value, callback = () => {}, space }) => {
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
      <span>{`${createSpace(space)}"${valueKey}": {`}</span>
      {updatedValue}
      <span>{`${createSpace(space)}}`}</span>
    </div>
  );
};

export default ObjectComponent;
