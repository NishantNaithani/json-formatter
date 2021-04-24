import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="center">
      <h1>PAGE NOT FOUND!</h1>
      <Link to="/">
        <i>Please use this link to move back to home</i>
      </Link>
    </div>
  );
};

export default NotFound;
