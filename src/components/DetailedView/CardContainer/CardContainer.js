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
        <h1>{title}</h1>
        <section>
          <span>{date}</span>
          <TxIcon isTx={isTx} />
        </section>
      </header>
      <main>{props.children}</main>
    </section>
  );
};

export default CardContainer;
