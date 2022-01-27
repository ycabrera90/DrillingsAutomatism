import React from "react";
import tankImg from "../../../images/tank.png";

const Tank = (props) => {
  return <img className={props.className} src={tankImg} />;
};

export default Tank;
