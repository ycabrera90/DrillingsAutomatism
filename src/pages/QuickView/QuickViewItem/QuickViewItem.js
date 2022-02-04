import React from "react";
import classes from "./QuickViewItem.module.css";

import { BsCheckCircle } from "react-icons/bs";
import ItemImage from "../ItemImage/ItemImage";
import iconTank from "../../../images/icon-tank.png";
import DataContainer from "../DataContainer/DataContainer";
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
            <DataContainer title="Altura" value={1.61} unit="mts" />
            <DataContainer title="Porciento" value={28.3} unit="%" />
            <DataContainer title="Nivel Pozo" value={1.61} unit="mts" />
            <DataContainer title="Altura" value={1.61} unit="mts" />
            <DataContainer title="Altura" value={1.61} unit="mts" />
            <DataContainer title="Altura" value={1.61} unit="mts" />
          </div>
        </article>
        <article className={classes.item}>
          <ItemImage src={pump} description="Bomba" />
          <DataContainer title="Presión" value={1.25} unit="bar" />
          <DataContainer title="Caudal" value={15.2} unit="m3/h" />
          <DataContainer title="Nivel Pozo" value={-12} unit="m" />
          <DataContainer title="Nivel Pozo" value={-12} unit="m" />
          <DataContainer title="Nivel Pozo" value={-12} unit="m" />
          <DataContainer title="Nivel Pozo" value={-12} unit="m" />
          <DataContainer title="Nivel Pozo" value={-12} unit="m" />
          <DataContainer title="Nivel Pozo" value={-12} unit="m" />
        </article>
      </main>
    </article>
  );
};

export default QuickViewItem;
