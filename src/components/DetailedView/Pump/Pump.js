import React from "react";
import pump from "../../../images/pump.png";

const Pump = (props) => {
  const { state } = props.data;
  const stateText = state ? "Prendida" : "Apagada";

  return (
    <div className={props.className}>
      <img src={pump} />
      <p>{stateText}</p>
    </div>
  );
};

export default Pump;
