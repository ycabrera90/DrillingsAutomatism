import React, { useContext } from "react";
import classes from "./MainNav.module.css";
import { useDispatch } from "react-redux";

import MainNavItem from "./MainNavItem/MainNavItem";
import MainNavButton from "./MainNavButton/MainNavButton";
import { authActions } from "../../../store/auth-slice";
import { keyGen } from "../../../util/keyGen";

const MainNav = ({ isExpanded, onBackdropClick }) => {
  const dispatch = useDispatch();

  const mainNavItems = [
    // { title: "Servicios", path: "/services" },
    { title: "Sistemas", path: "/sistems" },
    // { title: "Históricos", path: "/history" },
    // { title: "Ayuda", path: "/help" },
  ];

  const onLogoutButtonHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <div 
        className={`
          ${classes["backdrop"]} 
          ${isExpanded ? classes["expanded"]: ""}
        `} 
        onClick={onBackdropClick}
      />
      <nav
        className={`
          ${classes["nav-bar"]} 
          ${isExpanded ? classes["expanded"] : ""}
        `}
      >
        <ul>
          {mainNavItems.map((item) => (
            <MainNavItem key={keyGen()} to={item.path}>
              {item.title}
            </MainNavItem>
          ))}
        </ul>
        <MainNavButton onClick={onLogoutButtonHandler} />
      </nav>
    </>
  );
};

export default MainNav;
