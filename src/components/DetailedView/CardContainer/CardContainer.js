import React from "react";

import TxIcon from "../../UI/TxIcon/TxIcon";
import classes from "./CardContainer.module.css";

const CardContainer = (props) => {
  const { title, date, isTx } = props.data;
  
  const componentClasses = `${classes.card} ${
    props.className ? props.className : ""
  }`;

  return (
    <section className={componentClasses}>
      <header>
        <h1 className={classes["ref-name"]}>{title}</h1>
        <div>
          <span className={classes["date"]}>{date}</span>
          <TxIcon isTx={isTx} />
        </div>
      </header>
      <main>{props.children}</main>
    </section>
  );
};

export default CardContainer;
