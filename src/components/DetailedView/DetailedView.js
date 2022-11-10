import React from "react";
import classes from "./DetailedView.module.css";

import { BsWifi2 } from "react-icons/bs";

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
        <section className={classes.reference}>
          <header>
            <h1 className={classes['drilling-name']}>RIVPERF21 - TQ MOIRONES</h1>
              <span className={classes.date}>10/10/2022 21:42</span>
              <BsWifi2 className={classes["wifi-icon"]} />
          </header>
        </section>
      </div>
    </>
  );
};

export default DetailedView;
