import React from "react";
import classes from "./Measures.module.css";

const Measures = () => {
  return (
    <div className={classes["data-container"]}>
      <label>Presion:</label>
      <p>
        {<span className={classes.value}>5</span>}
        {<span className={classes.unit}>bar</span>}
      </p>
    </div>
  );
};

export default Measures;
