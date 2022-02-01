import React from "react";

import classes from "./LoginInput.module.css";

const LoginInput = (props) => {
  const randomId = Math.random();
  return (
    <section className={classes.control}>
        <label htmlFor={randomId} {...props.label}>
          {props.text}
        </label>
        <input id={randomId} {...props.input}></input>
        {props.msg && <p className={classes.info}>{props.msg}</p>}
    </section>
  )
};

export default LoginInput;
