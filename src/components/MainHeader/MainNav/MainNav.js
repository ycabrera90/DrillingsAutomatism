import React from "react";
import classes from "./MainNav.module.css";

import MainNavItem from "./MainNavItem/MainNavItem";
import MainNavButton from "./MainNavButton/MainNavButton";

const MainNav = (props) => {
  const { isExpanded } = props;

  const navBarClasses = isExpanded
    ? `${classes["nav-bar"]} ${classes["expanded"]}`
    : `${classes["nav-bar"]}`;

  const backdropClasses = isExpanded
    ? `${classes["backdrop"]} ${classes["expanded"]}`
    : `${classes["backdrop"]}`;

  const mainNavItems = [
    "Servicios",
    "Listado",
    "Sistemas",
    "Históricos",
    "Ayuda",
  ];

  return (
    <>
      <div className={backdropClasses} onClick={props.onBackdropClick}></div>
      <nav className={navBarClasses}>
        <ul>
          {mainNavItems.map((item) => (
            <MainNavItem key={`${item}_${Math.random()}`}>{item}</MainNavItem>
          ))}
        </ul>
        <MainNavButton />
      </nav>
    </>
  );
};

export default MainNav;
