import React from "react";

import { createSpace } from "../../helpers";

const ObjectComponent = ({
  valueKey,
  value,
  callback = () => {},
  space,
  showKey,
  initial,
}) => {
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
        {(showKey && `${createSpace(space)}"${valueKey}": {`) ||
          `${createSpace(space)}{`}
      </span>
      {updatedValue}
      <span>
        {(!initial && `${createSpace(space)}},`) || `${createSpace(space)}}`}
      </span>
    </div>
  );
};

export default ObjectComponent;
