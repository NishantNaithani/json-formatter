import React from "react";

const Button = ({ disabled, onClick, buttonText }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {buttonText}
    </button>
  );
};

export default Button;
