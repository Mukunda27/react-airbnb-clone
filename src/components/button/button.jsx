import React from "react";
import "./button.scss";

const CustomButton = ({ children, handleClick }) => {
  return (
    <button className="p-2 px-3" onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
