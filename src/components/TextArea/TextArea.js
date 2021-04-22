import React from "react";

const TextArea = ({ label, error, errorMessage, value, onChange, ...rest }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        {error && <p>{errorMessage}</p>}
      </div>
      <div>
        <textarea
          {...rest}
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default TextArea;
