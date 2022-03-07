import pump from "../../../images/pump.png";

import classes from "./Pump.module.css";

const Pump = ({ state }) => {
  return (
    <div className={classes.pump}>
      <img src={pump} />
      <p>{state ? "Prendida" : "Apagada"}</p>
    </div>
  );
};

export default Pump;
