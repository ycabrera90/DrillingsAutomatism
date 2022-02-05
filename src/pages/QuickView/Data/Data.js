import React from "react";
import classes from "./Data.module.css";

const Data = (props) => {
  const componentClasses = `${classes["data-cotainer"]} ${
    props.className ? props.className : ""
  }`;
  return (
    <div className={componentClasses}>
      {props.title && <h3>{props.title}</h3>}
      <p>
        {props.value}
        <span>{" " + props.unit}</span>
      </p>
    </div>
  );
};

export default Data;
