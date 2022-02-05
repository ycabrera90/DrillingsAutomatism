import React from "react";
import classes from "./QuickView.module.css";

import QuickViewItem from "./QuickViewItem/QuickViewItem";

const QuickView = (props) => {
  const quickViewItem = [{ title: "RIVPERF22-PERF 01", workinkMode: "AUTO" }];

  return (
    <>
      <section className={classes.background} />
      <section className={classes["quickview-container"]}>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
        <QuickViewItem data={quickViewItem}></QuickViewItem>
      </section>
    </>
  );
};

export default QuickView;
