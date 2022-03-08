import React from "react";
import classes from "./Data.module.css";

const Data = ({ className, title, titlePosition = "top", value, unit }) => {
  return (
    <div
      className={
       `${classes["data-cotainer"]} 
        ${className ? className : ""} 
        ${titlePosition === "top" ? classes["top-tittle-layout"] : classes["left-tittle-layout"]}`
      }
    >
      {title && titlePosition === "top" && (
        <h1 className={classes["title-up"]}>{title}</h1>
      )}
      {title && titlePosition === "left" && (
        <h1 className={classes["title-left"]}>{title}</h1>
      )}
      {value && <span className={classes["value"]}>{value}</span>}
      {unit && <span className={classes["unit"]}>{" " + unit}</span>}
    </div>
  );
};

export default Data;
