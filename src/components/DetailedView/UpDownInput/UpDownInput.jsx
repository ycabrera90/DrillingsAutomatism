import { useState } from "react";

import classes from "./UpDownInput.module.css";

const UpDownInput = ({ label }) => {
  const [value, setValue] = useState(0.00);

  const incrementHandler = () => {
    setValue((state) => (+state + 0.01).toFixed(2));
  };

  const decrementHandler = () => {
    setValue((state) => (state > 0 ? (+state - 0.01).toFixed(2) : state));
  };

  const changeHandler = (e) => {
    setValue(
      e.target.value === ""
        ? ""
        : e.target.value.length >= 4
        ? (+e.target.value).toFixed(2)
        : +e.target.value
    );
  };


  return (
    <div className={classes["up-down-input"]}>
      <label htmlFor={label}>{label}</label>
      <section>
        <button className={classes["dec"]} onClick={decrementHandler}> - </button>
        <input
          type="number"
          step="0.1"
          id={label}
          value={value}
          onChange={changeHandler}
          maxLength={4}
        ></input>
        <span>mts</span>
        <button className={classes["inc"]} onClick={incrementHandler}> + </button>
      </section>
    </div>
  );
};

export default UpDownInput;
