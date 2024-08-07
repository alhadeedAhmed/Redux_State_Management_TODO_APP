import React from "react";
import "./Alert.css";

const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      {type === "success" ? (
        <i className="fa fa-check-circle"></i>
      ) : (
        <i className="fa fa-exclamation-circle"></i>
      )}
      {message}
    </div>
  );
};

export default Alert;
