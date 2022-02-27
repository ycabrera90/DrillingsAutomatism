import React from "react";

import TxIcon from "../../../components/UI/TxIcon/TxIcon";

import classes from "./ItemImage.module.css";

const ItemImage = ({ src, description, highlighted, txState }) => {
  return (
    <div className={classes["item-image"]}>
      <TxIcon isTx={txState} />
      <img src={src}></img>
      <p className={highlighted ? classes.highlighted : ""}>{description}</p>
    </div>
  );
};

export default ItemImage;
