import React from "react";
import classes from "./CardContainer.module.css";

import { BsWifi, BsWifiOff } from "react-icons/bs";

const CardContainer = (props) => {
  const { title, date, isTx } = props.data;
  const componentClasses = `${classes.card} ${
    props.className ? props.className : ""
  }`;

  const wifiIcon = isTx ? (
    <BsWifi className={classes["wifi-icon"]} />
  ) : (
    <BsWifiOff className={`${classes["wifi-icon"]} ${classes["alert"]} `} />
  );

  return (
    <section className={componentClasses}>
      <header>
        <h1 className={classes["ref-name"]}>{title}</h1>
        <div>
          <span className={classes["date"]}>{date}</span>
          {wifiIcon}
        </div>
      </header>
      <main>{props.children}</main>
    </section>
  );
};

export default CardContainer;
