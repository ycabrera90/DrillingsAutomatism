import React from "react";

import ConfigButton from "./ConfigButton/ConfigButton";
import classes from "./CardData.module.css";

const CardData = ({ className, title, children, config }) => {

  const configButtonHandler = (state) => {
    console.log(state);
  } 

  return (
    <section className={`${classes.datas} ${className ? className : ""}`}>
      {!config && title && <h1>{title}</h1>}
      {config && <ConfigButton onClick={configButtonHandler} />}
      {children}
    </section>
  );
};

export default CardData;
