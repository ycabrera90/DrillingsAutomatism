import React from "react";
import classes from "./MainBar.module.css";

import SpyLogo from "../SpyLogo/SpyLogo";

const MainBar = () => {
  return (
    <header className={classes["main-bar"]}>
      <SpyLogo className={classes.logo} />
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

export default MainBar;
