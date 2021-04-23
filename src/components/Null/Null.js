import React from "react";

import { createSpace } from "../../helpers";

const NullComponent = ({ valueKey, space }) => {
  return (
    <div>
      {(valueKey && `${createSpace(space)}"${valueKey}": ${null}`) || null}
    </div>
  );
};

export default NullComponent;
