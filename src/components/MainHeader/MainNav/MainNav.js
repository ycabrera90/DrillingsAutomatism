import React, { useContext } from "react";
import classes from "./MainNav.module.css";
import { useDispatch } from "react-redux";

import MainNavItem from "./MainNavItem/MainNavItem";
import MainNavButton from "./MainNavButton/MainNavButton";
import { authActions } from "../../../store/auth-slice";
import { keyGen } from "../../../util/keyGen";

const MainNav = (props) => {
  const { isExpanded } = props;
  const dispatch = useDispatch();
  // const auth = useContext(AuthContext);

  const navBarClasses = isExpanded
    ? `${classes["nav-bar"]} ${classes["expanded"]}`
    : `${classes["nav-bar"]}`;

  const backdropClasses = isExpanded
    ? `${classes["backdrop"]} ${classes["expanded"]}`
    : `${classes["backdrop"]}`;

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
      <div className={backdropClasses} onClick={props.onBackdropClick}></div>
      <nav className={navBarClasses}>
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
