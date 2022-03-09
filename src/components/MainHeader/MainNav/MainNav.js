import React, { useContext } from "react";
import classes from "./MainNav.module.css";
import { useDispatch } from "react-redux";

import MainNavItem from "./MainNavItem/MainNavItem";
import MainNavButton from "./MainNavButton/MainNavButton";
import { authActions } from "../../../store/auth-slice";

const MainNav = ({ isExpanded, onBackdropClick }) => {
  const dispatch = useDispatch();

  const onLogoutButtonHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <div
        className={`
          ${classes["backdrop"]} 
          ${isExpanded ? classes["expanded"] : ""}
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
          <MainNavItem 
            to="/sistems" 
            onClick={onBackdropClick}
          >
            Sistemas
          </MainNavItem>
        </ul>
        <MainNavButton onClick={onLogoutButtonHandler} />
      </nav>
    </>
  );
};

export default MainNav;
