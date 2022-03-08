import React from "react";
import classes from "./Measures.module.css";

const Measures = ({ title, value, unit }) => {
  return (
    <div className={classes["data-container"]}>
      <label>{title}:</label>
      <p>
        {<span className={classes.value}>{value}</span>}
        {<span className={classes.unit}>{unit}</span>}
      </p>
    </div>
  );
};

export default Measures;
