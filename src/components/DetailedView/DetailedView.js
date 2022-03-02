import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailedViewLayout from "./DetailedViewLayout/DetailedViewLayout";
import CardContainer from "./CardContainer/CardContainer";
import CardData from "./CardData/CardData";
import Data from "../../pages/QuickView/Data/Data";
import Tank from "./Tank/Tank";
import Pump from "./Pump/Pump";

import classes from "./DetailedView.module.css";

const DetailedView = () => {
  const { sysId } = useParams();
  const systemData = useSelector((state) => state.data.systemDatas[sysId]);

  if (!systemData) {
    return <Redirect to="/sistems" />;
  }

  const { systemName, service, claims, drill, tank } = systemData;

  

  return (
    <DetailedViewLayout service={service}>
      <CardContainer
        className={classes["ref-container"]}
        data={{
          title: tank.name,
          date: tank.dateData,
          isTx: tank.isTx,
        }}
      > 
        <Tank className={classes["ref-image"]} />
        <CardData 
          className={classes["ref-datas"]} 
          title="Nivel de Agua"
          >
          <Data
            className={classes.data}
            titlePosition="left"
            value={1.85}
            unit="mts"
          />
          <Data
            className={classes.data}
            titlePosition="left"
            value={74}
            unit="%"
          />
        </CardData>

        <CardData
          className={classes["alarm-config"]}
          title="Alarmas"
          config
          quickView={
            <>
              <Data
                className={classes.data}
                title="Inferior:"
                titlePosition="left"
                value={5.2}
                unit="mts"
              />
              <Data
                className={classes.data}
                title="Superior:"
                titlePosition="left"
                value={5.4}
                unit="mts"
              />
            </>
          }
          largeView={<></>}
        />
      </CardContainer>

      <CardContainer
        className={classes["ctrl-container"]}
        data={{
          title: drill.name,
          date: drill.dateData,
          isTx: drill.isTx,
        }}
      >
        <CardData title="Bomba de perforación" className={classes["ctrl-card"]}>
          <Pump state={drill.pumpSt} className={classes["ctrl-image"]} />
          <CardData title="Funcionamiento" className={classes["ref-datas"]}>
            <Data className={classes.data} value={1.85} unit="mts" />
            <Data className={classes.data} value={74} unit="%" />
          </CardData>
        </CardData>
      </CardContainer>
    </DetailedViewLayout>
  );
};

export default DetailedView;
