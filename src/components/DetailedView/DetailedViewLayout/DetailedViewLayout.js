import React from "react";

import { AiOutlineCheckCircle } from "react-icons/ai";

import classes from "./DetailedViewLayout.module.css";

const DetailedViewLayout = ({ children, service }) => {
  return (
    <>
      <header className={classes["detailed-view--header"]}>
        <h1>{service}</h1>
        <AiOutlineCheckCircle />
      </header>
      <main className={classes["detailed-view--main"]}>{children}</main>
    </>
  );
};

export default DetailedViewLayout;
