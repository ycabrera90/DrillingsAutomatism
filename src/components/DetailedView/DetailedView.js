import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailedViewLayout from "./DetailedViewLayout/DetailedViewLayout";
import CardContainer from "./CardContainer/CardContainer";
import CardData from "./CardData/CardData";
import Data from "../../pages/QuickView/Data/Data";
import Tank from "./Tank/Tank";
import Pump from "./Pump/Pump";
import UpDownInput from "./UpDownInput/UpDownInput";

import classes from "./DetailedView.module.css";

const DetailedView = () => {
  const { sysId } = useParams();
  const { service, drill, tank } = useSelector((state) => {
    if (!Object.keys(state.data.systemDatas).includes(sysId)) {
      return { service: null, drill: null, tank: null };
    }
    return state.data.systemDatas[sysId];
  });

  if (!service) {
    return <Redirect to="/sistems" />;
  }

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
        <CardData className={classes["ref-datas"]} title="Nivel de Agua">
          <Data
            className={classes.data}
            titlePosition="left"
            value={tank.measures.htq.value}
            unit={tank.measures.htq.unit}
          />
          <Data
            className={classes.data}
            titlePosition="left"
            value={tank.measures.prc.value}
            unit={tank.measures.prc.unit}
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
                value={tank.alarms.low.value}
                unit="mts"
              />
              <Data
                className={classes.data}
                title="Superior:"
                titlePosition="left"
                value={tank.alarms.high.value}
                unit="mts"
              />
            </>
          }
          largeView={
            <div className={classes["config-alarm-container"]}>
              <UpDownInput label="Alarma Superior" sysId={sysId} type="high" />
              <UpDownInput label="Alarma Inferior" sysId={sysId} type="low" />
            </div>
          }
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
