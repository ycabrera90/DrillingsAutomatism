import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { FaFlagCheckered } from "react-icons/fa";

import classes from "./ClaimsIcon.module.css";

const ClaimsIcon = ({active,children}) => {
  return (
    <>
      {active && (
        <span className={classes["claim-badge"]}>{children}</span>
      )}
      {active && <FaFlagCheckered className={classes["flag-icon"]} />}
      {!active && (
        <BsCheckCircle className={classes["checked-icon"]} />
      )}
    </>
  );
};

export default ClaimsIcon;
