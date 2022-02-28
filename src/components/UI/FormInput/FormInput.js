import React from "react";
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const randomId = Math.random();
  return (
    <div className={classes.control}>
      <label htmlFor={randomId} {...props.label}>
        {props.text}
      </label>
      <input id={randomId} {...props.input}></input>
      {props.msg && <p className={classes.info}>{props.msg}</p>}
    </div>
  );
};

export default FormInput;

///////////////////////////////////////
{
  /* <FormInput
  text="City"
  msg={cityInputHasError && "The city field must not be emty"}
  input={{
    type: "text",
    value: city,
    className: cityInputHasError ? classes.invalid : "",
    onChange: cityInputChangeHandler,
    onBlur: cityInputBlurHandler,
  }}
/>; */
}
