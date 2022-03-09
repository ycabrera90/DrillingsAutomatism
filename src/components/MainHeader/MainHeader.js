import React from "react";
import { useState } from "react";
import classes from "./MainHeader.module.css";

import SpyLogo from "../UI/SpyLogo/SpyLogo";
import ToggleButton from "./ToggleButton/ToggleButton";
import MainNav from "./MainNav/MainNav";

const MainHeader = () => {
  const [isMainNavExpanded, setIsMainNavExpanded] = useState(false);

  const toggleButtonClicHandler = () => {
    setIsMainNavExpanded((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setIsMainNavExpanded((prevState) => !prevState);
  };
  
  return (
    <header className={classes["main-header"]}>
      <SpyLogo />
      <ToggleButton 
        onClick={toggleButtonClicHandler} 
        clicked={isMainNavExpanded}
      />
      <MainNav
        onBackdropClick={backdropClickHandler}
        isExpanded={isMainNavExpanded}
      />
    </header>
  );
};

export default MainHeader;
