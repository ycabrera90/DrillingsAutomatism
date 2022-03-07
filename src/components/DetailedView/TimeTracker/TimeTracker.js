import React from "react";
import classes from "./TimeTracker.module.css";

const TimeTracker = ({ title, hours, minutes }) => {
  return (
    <article className={ classes["time-tracker"] }>
      <label>{ title }</label>
      <p>
        { hours && <span className={classes.value}>{ hours }</span> }
        { hours && <span className={classes.unit}>h</span> }
        { minutes && <span className={classes.value}>{ minutes }</span> }
        { minutes && <span className={classes.unit}>m</span> }
      </p>
    </article>
  );
};

export default TimeTracker;
