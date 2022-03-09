import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavItem.module.css";

const MainNavItem = ({ to, children, onClick }) => {
  return (
    <li className={classes["main-nav_item"]} onClick={onClick}>
      <NavLink to={to} activeClassName={classes.active} exact>
        {children}
      </NavLink>
    </li>
  );
};

export default MainNavItem;
