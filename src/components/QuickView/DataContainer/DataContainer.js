import React from "react";
import classes from "./DataContainer.module.css";

const DataContainer = (props) => {
  return (
    <div className={classes["data-cotainer"]}>
      <h3>{props.title}</h3>
      <p>
        {props.value}<span>{' '+ props.unit}</span>
      </p>
    </div>
  );
};

export default DataContainer;
