import pump from "../../../images/pump.png";
import Measures from "./Measures/Measures";

import classes from "./Pump.module.css";

const Pump = ({ state }) => {
  return (
    <section className={classes["pump-container"]}>
      <article className={classes["pump-image"]}>
        <img src={pump} />
        <p>{state ? "Prendida" : "Apagada"}</p>
      </article>
      <article className={classes["pump-datas"]}>
        <div className={classes["data-scroll"]}>
          <Measures />
        </div>
      </article>
    </section>
  );
};

export default Pump;
