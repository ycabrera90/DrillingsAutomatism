import React from "react";

import { BsWifi, BsWifiOff } from "react-icons/bs";
import classes from "./TxIcon.module.css";

const TxIcon = ({ isTx }) => {
  return (
    <i>
      {isTx && <BsWifi className={classes["wifi-icon"]} />}
      {!isTx && (
        <BsWifiOff className={`${classes["wifi-icon"]} ${classes["alert"]} `} />
      )}
    </i>
  );
};

export default TxIcon;
