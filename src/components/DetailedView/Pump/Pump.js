import pump from "../../../images/pump.png";
import CardData from "../CardData/CardData";
import Measures from "./Measures/Measures";


import classes from "./Pump.module.css";

const Pump = ({ state }) => {
  return (
    <section className={classes["pump-container"]}>
      <article className={classes["pump-image"]}>
        <img src={pump} />
        <p>{state ? "Prendida" : "Apagada"}</p>
      </article>
      <CardData className={classes["pump-datas"]} title="Medidas">
        <article className={classes["scroll-container"]}>
          <div className={classes["datas-container"]}>
            <Measures />
            <Measures />
            <Measures />
            <Measures />
            <Measures />
          </div>
        </article>
      </CardData>
    </section>
  );
};

export default Pump;
