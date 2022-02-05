import React from "react";
import classes from "./QuickViewItem.module.css";

import { BsCheckCircle } from "react-icons/bs";
import ItemImage from "../ItemImage/ItemImage";
import iconTank from "../../../images/icon-tank.png";
import Data from "../Data/Data";
import pump from "../../../images/pump.png";

const QuickViewItem = () => {
  return (
    <article className={classes["item-container"]}>
      <header>
        <h1>RIVPERF22-PERF 01</h1>
        <span>AUTO</span>
        <BsCheckCircle className={classes.icon} />
      </header>
      <main>
        <article className={classes.item}>
          <i>
            <ItemImage src={iconTank} description="Tanque" />
          </i>
          <div className={classes["data-container"]}>
            <Data title="Altura" value={1.61} unit="mts" />
            <Data title="Porciento" value={28.3} unit="%" />
            <Data title="Volumen" value={21} unit="m3" />
            <Data title="Volumen" value={21} unit="m3" />
            <Data title="Volumen" value={21} unit="m3" />
            <Data title="Volumen" value={21} unit="m3" />
            <Data title="Volumen" value={21} unit="m3" />
          </div>
        </article>
        <article className={classes.item}>
          <i>
            <ItemImage src={pump} description="Bomba" />
          </i>
          <div className={classes["data-container"]}>
            <Data title="Presión" value={1.25} unit="bar" />
            <Data title="Caudal" value={15.2} unit="m3/h" />
            <Data title="Nivel Pozo" value={-12} unit="m" />
            <Data title="Nivel Pozo" value={-12} unit="m" />
            <Data title="Nivel Pozo" value={-12} unit="m" />
            <Data title="Nivel Pozo" value={-12} unit="m" />
            <Data title="Nivel Pozo" value={-12} unit="m" />
          </div>
        </article>
      </main>
    </article>
  );
};

export default QuickViewItem;
