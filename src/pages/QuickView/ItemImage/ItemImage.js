import React from "react";
import classes from "./ItemImage.module.css";

const ItemImage = (props) => {
  return (
    <div className={classes["item-image"]}>
      <img src={props.src}></img>
      <p>{props.description}</p>
    </div>
  );
};

export default ItemImage;
