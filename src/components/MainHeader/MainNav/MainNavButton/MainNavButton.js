import React from "react";
import classes from "./MainNavButton.module.css";

const MainNavButton = ({onClick}) => {
  return (
    <button 
      className={classes["main-nav__button"]} 
      onClick={onClick}
    >
      <span>YC</span>
    </button>
  );
};

export default MainNavButton;
