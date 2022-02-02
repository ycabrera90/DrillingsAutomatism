import React from "react";
import classes from "./MainNavItem.module.css";

const MainNavItem = (props) => {
  return (
    <li className={classes["main-nav_item"]}>
      <a href="">{props.children}</a>
    </li>
  );
};

export default MainNavItem;
