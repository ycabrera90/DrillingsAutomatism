import React from "react";
import { useState } from "react";
import classes from "./MainHeader.module.css";

import SpyLogo from "../UI/SpyLogo/SpyLogo";
import ToggleButton from "./ToggleButton/ToggleButton";
import MainNav from "./MainNav/MainNav";

const MainHeader = () => {
  const [isMainNavExpanded, setIsMainNavExpanded] = useState(false);

  const toggleButtonHandler = () => {
    setIsMainNavExpanded((prevState) => !prevState);
  };

  // let navBarClasses = `${classes["nav-bar"]}  ${
  //   expandedClass ? classes["expanded"] : ""
  // }`;

  return (
    <header className={classes["main-header"]}>
      <SpyLogo />
      <ToggleButton onClick={toggleButtonHandler} />
      <MainNav isExpanded={isMainNavExpanded}/>
    </header>
  );
};

export default MainHeader;
