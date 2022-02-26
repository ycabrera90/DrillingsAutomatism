import React from "react";

import { BsWifi, BsWifiOff } from "react-icons/bs";
import classes from "./TxIcon.module.css";

const TxIcon = ({ isTx, className }) => {
  const componentClasses = `${classes["tx-icon"]} ${
    className ? className : ""
  }`;

  return (
    <i className={componentClasses}>
      {isTx && <BsWifi className={classes["wifi-ok"]} />}
      {!isTx && <BsWifiOff className={classes["wifi-fail"]} />}
    </i>
  );
};

export default TxIcon;
