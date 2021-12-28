import React from "react";
import classes from "./SpyLogo.module.css";
import logo from "./logo.png";

const SpyLogo = () => {
  return (
    <div className={classes.logos}>
      <a href="http://www.spymovil.com" className={classes.logo}>
        <div className={classes.spy}>
          <span>SPYMOVIL</span>
        </div>
        <div className={classes.sub}>Ingeniería Industrial</div>
        <img src={logo}></img>
      </a>
    </div>
  );
};

export default SpyLogo;
