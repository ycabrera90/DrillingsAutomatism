import React from "react";
import classes from "./MainHeader.module.css";

import SpyLogo from "../SpyLogo/SpyLogo";
import ToggleButton from "./ToggleButton/ToggleButton";

const MainHeader = () => {
  const toggleButtonHandler = () => {};

  return (
    <header className={classes["main-bar"]}>
      <SpyLogo className={classes.logo} />
      <ToggleButton onClick={toggleButtonHandler} />
      <div className={classes["nav-bar"]}>
        <ul>
          <li>Servicios</li>
          <li>Listado</li>
          <li>Sistemas</li>
          <li>Históricos</li>
          <li>Ayuda</li>
        </ul>
        <button>
          <span>YC</span>
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
