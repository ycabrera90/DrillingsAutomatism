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


  return (
    <>
      <section className={classes["quickview-container"]}>
        {Object.entries(systemDatas).map(([sysId, datas]) => (
          <QuickViewItem
            key={sysId}
            id={sysId}
            data={datas}
            onClick={onItemClickHandler}
          />
        ))}
      </section>
    </>
  );
};

export default QuickView;
