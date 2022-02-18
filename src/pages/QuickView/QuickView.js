import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import QuickViewItem from "./QuickViewItem/QuickViewItem";
import classes from "./QuickView.module.css";

const QuickView = (props) => {
  const systemDatas = useSelector((state) => state.data.systemDatas);
  const history = useHistory();

  const onItemClickHandler = (itemId) => {
    history.push(`/sistems/${itemId}`);
  };

  const quickviewItems = Object.entries(systemDatas).map(
    ([sysId, datas]) => (
      <QuickViewItem
        key={sysId}
        id={sysId}
        data={datas}
        onClick={onItemClickHandler}
      />
    )
  );

  return (
    <>
      <section className={classes.background} />
      <section className={classes["quickview-container"]}>
        {quickviewItems}
      </section>
    </>
  );
};

export default QuickView;
