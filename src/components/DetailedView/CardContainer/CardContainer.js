import React from "react";
import classes from "./CardContainer.module.css";

import { BsWifi2 } from "react-icons/bs";

const CardContainer = (props) => {
  return (
    <section className={classes.card}>
      <header>
        <h1 className={classes["ref-name"]}>{props.title}</h1>
        <div>
          <span className={classes["date"]}>10/10/2022 21:42</span>
          <BsWifi2 className={classes["wifi-icon"]} />
        </div>
      </header>
      <main className={props.className}>{props.children}</main>
    </section>
  );
};

export default CardContainer;
