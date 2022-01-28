import React from "react";
import classes from "./CardData.module.css";

const CardData = (props) => {
  const componentClasses = props.className
    ? `${props.className} ${classes.datas}`
    : classes.datas;

  return (
    <section className={componentClasses}>
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </section>
  );
};

export default CardData;
