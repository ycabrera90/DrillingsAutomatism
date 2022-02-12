import React, { useContext } from "react";
import classes from "./MainNav.module.css";

import MainNavItem from "./MainNavItem/MainNavItem";
import MainNavButton from "./MainNavButton/MainNavButton";
import AuthContext from "../../../context/auth-context";

const MainNav = (props) => {
  const { isExpanded } = props;
  const auth = useContext(AuthContext);

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

  const onLogoutButtonHandler = () => {
    auth.logout();
  };

  return (
    <>
      <div className={backdropClasses} onClick={props.onBackdropClick}></div>
      <nav className={navBarClasses}>
        <ul>
          {mainNavItems.map((item) => (
            <MainNavItem key={`${item}_${Math.random()}`}>{item}</MainNavItem>
          ))}
        </ul>
        <MainNavButton onClick={onLogoutButtonHandler} />
      </nav>
    </>
  );
};

export default MainNav;
