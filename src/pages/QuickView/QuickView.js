import React from "react";
import classes from "./QuickView.module.css";

import { BsCheckCircle } from "react-icons/bs";
import tankImg from "../../images/icon-tank.png";
import pump from "../../images/pump.png";
import DataContainer from "./DataContainer/DataContainer";
import ItemImage from "./ItemImage/ItemImage";

const QuickView = (props) => {
  return (
    <>
      <section className={classes.background} />
      <section className={classes["quickview-container"]}>
        <article className={classes["item-container"]}>
          <header>
            <h1>RIVPERF22-PERF 01</h1>
            <span>AUTO</span>
            <BsCheckCircle />
          </header>
          <main>
            <article className={classes.item}>
              <ItemImage src={tankImg} description="Tanque" />
              <DataContainer title="Altura" value={1.61} unit="mts" />
              <DataContainer title="Porciento" value={25} unit="%" />
            </article>
            <article className={classes.item}>
              <ItemImage src={pump} description="Bomba" />
              <DataContainer title="Presión" value={1.25} unit="bar" />
              <DataContainer title="Caudal" value={15.2} unit="m3/h" />
              <DataContainer title="Nivel Pozo" value={-12} unit="m" />
            </article>
          </main>
        </article>

        
      </section>
    </>
  );
};

export default QuickView;
