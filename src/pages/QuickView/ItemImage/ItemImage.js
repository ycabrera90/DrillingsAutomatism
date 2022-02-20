import React from "react";
import classes from "./ItemImage.module.css";

const ItemImage = ({ src, description, highlighted }) => {
  return (
    <div className={classes["item-image"]}>
      <img src={src}></img>
      <p className={highlighted ? classes.highlighted : ""}>{description}</p>
    </div>
  );
};

export default ItemImage;
