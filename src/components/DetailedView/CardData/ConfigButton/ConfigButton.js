import React, { useState, useCallback, memo } from "react";

import { FaCog, FaTimes } from "react-icons/fa";

import classes from "./ConfigButton.module.css";

const ConfigButton = ({ onClick }) => {
const [clicked, setClicked] = useState(false);

const clickHandler = useCallback(() => {
  setClicked((state) => {
    onClick(!state);
    return !state;
  });
}, [onClick]);

  return (
    <button className={classes["config-button"]} onClick={clickHandler}>
      {!clicked && <FaCog />}
      {clicked && <FaTimes />}
    </button>
  );
};

export default memo(ConfigButton);