import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ClaimsIcon from "../../UI/ClaimsIcon/ClaimsIcon";

import classes from "./DetailedViewLayout.module.css";

const DetailedViewLayout = ({ children, service }) => {
  const { sysId } = useParams();
  const claims = useSelector((state) => state.data.systemDatas[sysId].claims);

  const { status: areActiveClaims, amount: amountOfActiveClaims } =
    claims.reduce(
      (prevValue, currValue) =>
        currValue.active
          ? { status: true, amount: prevValue.amount + 1 }
          : prevValue,
      { status: false, amount: 0 }
    );
  return (
    <>
      <header className={classes["detailed-view--header"]}>
        <h1 className={classes["header_title"]}>{service}</h1>
        {/* <ClaimsIcon className={classes["header_icon"]} active={areActiveClaims}>
          {amountOfActiveClaims}
        </ClaimsIcon> */}
      </header>
      <main className={classes["detailed-view--main"]}>{children}</main>
    </>
  );
};

export default DetailedViewLayout;
