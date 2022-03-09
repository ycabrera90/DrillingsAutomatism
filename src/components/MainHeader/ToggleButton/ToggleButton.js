import React from "react";
import classes from "./ToggleButton.module.css";
import { useState } from "react";

const ToggleButton = ({ className, clicked, onClick }) => {
  return (
    <button
      className={`
        ${className} 
        ${classes["toggle-button"]} 
        ${clicked ? classes["expanded"] : ""}
      `}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleButton;
