import { memo } from "react";

import { FaCog, FaTimes } from "react-icons/fa";
import classes from "./ConfigButton.module.css";

const ConfigButton = ({ onClick, clicked }) => {
  return (
    <button
      className={[
        `${classes["config-button"]} ${clicked ? classes.clicked : ""}`,
      ]}
      onClick={onClick}
    >
      {!clicked && <FaCog />}
      {clicked && <FaTimes />}
    </button>
  );
};

export default memo(ConfigButton);