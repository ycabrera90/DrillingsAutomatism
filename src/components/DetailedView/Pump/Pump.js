import React from "react";
import pump from "../../../images/pump.png";

const Pump = ({ state, className }) => {
  const stateText = state ? "Prendida" : "Apagada";

  return (
    <div className={className}>
      <img src={pump} />
      <p>{stateText}</p>
    </div>
  );
};

export default Pump;
