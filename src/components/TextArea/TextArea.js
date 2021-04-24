import React from "react";

const TextArea = ({ placeholder, value, onChange, ...rest }) => {
  return (
    <div>
      <textarea
        style={{ resize: "none" }}
        {...rest}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
