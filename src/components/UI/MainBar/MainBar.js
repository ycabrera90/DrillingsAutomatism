import React from "react";
import classes from "./MainBar.module.css";

import SpyLogo from "../SpyLogo/SpyLogo";

const MainBar = () => {
  return (
    <header className={classes["main-bar"]}>
      <SpyLogo className={classes.logo}/>

      <ul className={classes["nav-bar"]}>
        <li>Servicios</li>
        <li>Listado</li>
        <li>Sistemas</li>
        <li>Históricos</li>
        <li>Ayuda</li>
        <span>YC</span>
      </ul>
    </header>
  );
};

export default MainBar;
