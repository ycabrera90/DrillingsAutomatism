import React from "react";
import classes from "./MainNav.module.css";

import MainNavItem from "./MainNavItem/MainNavItem";
import MainNavButton from "./MainNavButton/MainNavButton";

const MainNav = (props) => {
  const { isExpanded } = props;

  let navBarClasses = isExpanded
    ? `${classes["nav-bar"]} ${classes["expanded"]}`
    : `${classes["nav-bar"]}`;

  const mainNavItems = [
    "Servicios",
    "Listado",
    "Sistemas",
    "Históricos",
    "Ayuda",
  ];

  return (
    <nav className={navBarClasses}>
      <ul>
        {mainNavItems.map((item) => (
          <MainNavItem key={`${item}_${Math.random()}`}>{item}</MainNavItem>
        ))}
      </ul>
      <MainNavButton />
    </nav>
  );
};

export default MainNav;
