import React from "react";
import classes from "./LayOut.module.css";

import MainHeader from "../../MainHeader/MainHeader";

const LayOut = (props) => {
  return (
    <>
      <section className={classes.background} />
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default LayOut;
