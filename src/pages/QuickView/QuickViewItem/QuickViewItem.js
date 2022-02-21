import React from "react";
import classes from "./QuickViewItem.module.css";

import { keyGen } from "../../../util/keyGen";

import ClaimsIcon from "../../../components/UI/ClaimsIcon/ClaimsIcon";
import ItemImage from "../ItemImage/ItemImage";
import iconTank from "../../../images/icon-tank.png";
import Data from "../Data/Data";
import pump from "../../../images/pump.png";

const QuickViewItem = ({ id, data, onClick }) => {
  const { systemName, service, claims, drill, tank } = data;

  const { status: areActiveClaims, amount: amountOfActiveClaims } =
    claims.reduce(
      (prevValue, currValue) =>
        currValue.active
          ? { status: true, amount: prevValue.amount + 1 }
          : prevValue,
      { status: false, amount: 0 }
    );

  const tankMeasuresItems = Object.entries(tank.measures).map(([key, item]) => (
    <Data
      key={keyGen()}
      title={item.title}
      value={item.value}
      unit={item.unit}
    />
  ));

  const drillMeasuresItems = Object.entries(drill.measures).map(
    ([key, item]) => (
      <Data
        key={keyGen()}
        title={item.title}
        value={item.value}
        unit={item.unit}
      />
    )
  );

  return (
    <article className={classes["item-container"]}>
      <header className={classes["item-header"]}>
        <h1
          className={classes["item-header_title"]}
          onClick={onClick.bind(null, id)}
        >
          {systemName}
        </h1>
        <span className={classes["item-header_mode"]}>{drill.workingMode}</span>
        <ClaimsIcon active={areActiveClaims}>{amountOfActiveClaims}</ClaimsIcon>
      </header>
      <main>
        <article className={classes.item}>
          <i>
            <ItemImage
              src={iconTank}
              description="Tanque"
              highlighted={false}
            />
          </i>
          <div className={classes["data-container"]}>{tankMeasuresItems}</div>
        </article>
        <article className={classes.item}>
          <i>
            <ItemImage
              src={pump}
              description="Bomba"
              highlighted={drill.pumpSt}
            />
          </i>
          <div className={classes["data-container"]}>{drillMeasuresItems}</div>
        </article>
      </main>
    </article>
  );
};

export default QuickViewItem;
