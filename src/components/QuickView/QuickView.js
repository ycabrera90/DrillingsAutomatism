import React from "react";
import classes from "./QuickView.module.css";

import tankImg from "../../images/tank.png";
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
        <article className={classes["item-container"]}>
          <header>
            <h1>RIVPERF22-PERF 01</h1>
            <span>AUTO</span>
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
              {/* <DataContainer title="Nivel Pozo" value={-12} unit="m" /> */}
            </article>
          </main>
        </article>
        <article className={classes["item-container"]}>
          <header>
            <h1>RIVPERF22-PERF 01</h1>
            <span>AUTO</span>
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
          <main>
            <article className={classes.item}>
              <ItemImage src={tankImg} description="Tanque" />
              <DataContainer title="Altura" value={1.61} unit="mts" />
              <DataContainer title="Porciento" value={25} unit="%" />
            </article>
            <article className={classes.item}>
              <ItemImage src={pump} description="Bomba" />
              {/* <DataContainer title="Presión" value={1.25} unit="bar" /> */}
              <DataContainer title="Caudal" value={15.2} unit="m3/h" />
              <DataContainer title="Nivel Pozo" value={-12} unit="m" />
            </article>
          </main>
        </article>
        <article className={classes["item-container"]}>
          <header>
            <h1>RIVPERF22-PERF 01</h1>
            <span>AUTO</span>
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
              {/* <DataContainer title="Nivel Pozo" value={-12} unit="m" /> */}
            </article>
          </main>
        </article>
        <article className={classes["item-container"]}>
          <header>
            <h1>RIVPERF22-PERF 01</h1>
            <span>AUTO</span>
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
        <article className={classes["item-container"]}>
          <header>
            <h1>RIVPERF22-PERF 01</h1>
            <span>AUTO</span>
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
          <main>
            <article className={classes.item}>
              <ItemImage src={tankImg} description="Tanque" />
              <DataContainer title="Altura" value={1.61} unit="mts" />
              <DataContainer title="Porciento" value={25} unit="%" />
            </article>
            <article className={classes.item}>
              <ItemImage src={pump} description="Bomba" />
              <DataContainer title="Presión" value={1.25} unit="bar" />
              {/* <DataContainer title="Caudal" value={15.2} unit="m3/h" /> */}
              {/* <DataContainer title="Nivel Pozo" value={-12} unit="m" /> */}
            </article>
          </main>
        </article>
        <article className={classes["item-container"]}>
          <header>
            <h1>RIVPERF22-PERF 01</h1>
            <span>AUTO</span>
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
