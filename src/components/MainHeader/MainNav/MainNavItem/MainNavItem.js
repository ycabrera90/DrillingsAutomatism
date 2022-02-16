import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavItem.module.css";

const MainNavItem = (props) => {
  return (
    <li className={classes["main-nav_item"]}>
      <NavLink to={props.to} activeClassName={classes.active} exact>
        {props.children}
      </NavLink>
      {/* <a href="">{props.children}</a> */}
    </li>
  );
};

export default MainNavItem;
