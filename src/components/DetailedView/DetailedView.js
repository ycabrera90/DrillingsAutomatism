import React from "react";
import classes from "./DetailedView.module.css";

import CardContainer from "./CardContainer/CardContainer";
import CardData from "./CardData/CardData";
import DataContainer from "../../pages/QuickView/Data/Data";
import Tank from "./Tank/Tank";
import Pump from "./Pump/Pump";

const DetailedView = () => {
  return (
    <>
      <section className={classes.background} />
      <header className={classes["detailed-view--header"]}>
        <h1>MOIRONES</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>
      </header>
      <div className={classes["detailed-view--container"]}>
        <CardContainer
          className={classes["ref-container"]}
          data={{
            title: "RIVPERF21 - TQ MOIRONES",
            date: "10/10/2022 21:41",
            isTx: true,
          }}
        >
          <Tank className={classes["ref-image"]} />
          <CardData title="Nivel de Agua" className={classes["ref-datas"]}>
            <DataContainer className={classes.data} value={1.85} unit="mts" />
            <DataContainer className={classes.data} value={74} unit="%" />
          </CardData>
          <CardData title="Alarmas" className={classes["ref-alarms"]}>
            <div>
              <span>Inferior:</span>
              <DataContainer className={classes.data} value={5.2} unit="mts" />
            </div>
            <div>
              <span>Superior:</span>
              <DataContainer className={classes.data} value={5.4} unit="mts" />
            </div>
          </CardData>
        </CardContainer>

        <CardContainer
          className={classes["ctrl-container"]}
          data={{
            title: "RIVPERF01 - PERF. MEVIR",
            date: "10/10/2022 21:41",
            isTx: true,
          }}
        >
          <CardData
            title="Bomba de perforación"
            className={classes["ctrl-card"]}
          >
            <Pump data={{ state: false }} className={classes["ctrl-image"]} />
            <CardData title="Funcionamiento" className={classes["ref-datas"]}>
              <DataContainer className={classes.data} value={1.85} unit="mts" />
              <DataContainer className={classes.data} value={74} unit="%" />
            </CardData>
          </CardData>
        </CardContainer>
      </div>
    </>
  );
};

export default DetailedView;
