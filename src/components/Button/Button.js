import React from "react";

const Button = ({ disabled, onClick, buttonText }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: "15px 32px",
        margin: "4px 2px",
        border: "none",
        fontSize: "14px",
        height: "50px",
        width: "200px",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
