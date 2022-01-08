import React from "react";
import classes from "./MainHeader.module.css";
import { useState } from "react";

import SpyLogo from "../SpyLogo/SpyLogo";
import ToggleButton from "./ToggleButton/ToggleButton";

const MainHeader = () => {
  const [expandedClass, setExpandedClass] = useState(false);

  const toggleButtonHandler = () => {
    setExpandedClass((prevState) => !prevState);
  };

  let navBarClasses = `${classes["nav-bar"]}  ${
    expandedClass ? classes["expanded"] : ""
  }`;

  return (
    <header className={classes["main-header"]}>
      <SpyLogo className={classes.logo} />
      <ToggleButton onClick={toggleButtonHandler} />
      <div className={navBarClasses}>
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
