import pump from "../../../images/pump.png";
import CardData from "../CardData/CardData";
import Measures from "./Measures/Measures";

import classes from "./Pump.module.css";

const Pump = ({ datas: { pumpSt, measures } }) => {
  return (
    <section className={classes["pump-container"]}>
      <article className={classes["pump-image"]}>
        <img src={pump} />
        <p style={{ color: pumpSt ? "#f84848" : "#ffffff45" }}>
          {pumpSt ? "Prendida" : "Apagada"}
        </p>
      </article>
      <CardData className={classes["pump-datas"]} title="Medidas">
        <article className={classes["scroll-container"]}>
          <div className={classes["datas-container"]}>
            {Object.entries(measures).map(([key, { title, value, unit }]) => (
              <Measures key={key} title={title} value={value} unit={unit} />
            ))}
          </div>
        </article>
      </CardData>
    </section>
  );
};

export default Pump;
