import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailedViewLayout from "./DetailedViewLayout/DetailedViewLayout";
import CardContainer from "./CardContainer/CardContainer";
import CardData from "./CardData/CardData";
import DataContainer from "../../pages/QuickView/Data/Data";
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
        <CardData title="Nivel de Agua" className={classes["ref-datas"]}>
          <DataContainer className={classes.data} value={1.85} unit="mts" />
          <DataContainer className={classes.data} value={74} unit="%" />
        </CardData>
        <CardData title="Alarmas" className={classes["ref-alarms"]}>
          <div>
            <span>Inferior:</span>
            <DataContainer className={classes.data} value={5.2} unit="mts" />
          </div>
          <div>
            <span>Superior:</span>
            <DataContainer className={classes.data} value={5.4} unit="mts" />
          </div>
        </CardData>
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
            <DataContainer className={classes.data} value={1.85} unit="mts" />
            <DataContainer className={classes.data} value={74} unit="%" />
          </CardData>
        </CardData>
      </CardContainer>
    </DetailedViewLayout>
  );
};

export default DetailedView;
