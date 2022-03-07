import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailedViewLayout from "./DetailedViewLayout/DetailedViewLayout";
import CardContainer from "./CardContainer/CardContainer";
import CardData from "./CardData/CardData";
import Data from "../../pages/QuickView/Data/Data";
import Tank from "./Tank/Tank";
import Pump from "./Pump/Pump";
import UpDownInput from "./UpDownInput/UpDownInput";
import TimeTracker from "./TimeTracker/TimeTracker";

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
        className={classes["tank-card"]}
        data={{
          title: tank.name,
          date: tank.dateData,
          isTx: tank.isTx,
        }}
      >
        <section className={classes["tank-card__body"]}>
          <Tank className={classes["tank-image"]} />
          <CardData className={classes["tank-datas"]} title="Nivel de Agua">
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
            className={classes["tank-alarm"]}
            title="Límites"
            config
            quickView={
              <section className={classes["quickView-alarm-container"]}>
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
              </section>
            }
            largeView={
              <div className={classes["largeView-alarm-container"]}>
                <UpDownInput
                  label="Alarma Superior"
                  sysId={sysId}
                  type="high"
                />
                <UpDownInput label="Alarma Inferior" sysId={sysId} type="low" />
              </div>
            }
          />
        </section>
      </CardContainer>

      <CardContainer
        className={classes["pump-card"]}
        data={{
          title: drill.name,
          date: drill.dateData,
          isTx: drill.isTx,
        }}
      >
        <CardData
          title="Bomba de perforación"
          className={classes["pump-card--nested"]}
        >
          <section className={classes["nested-card__body"]}>
            <Pump state={drill.pumpSt} />
            <CardData
              title="Funcionamiento"
              className={classes["pump-performance"]}
            >
              <section className={classes["pump-performance__body"]}>
                <TimeTracker title="Diario:"  hours={3} minutes={6}/>
                <TimeTracker title="Total:"  hours={3017}/>
              </section>

            </CardData>
          </section>
        </CardData>
      </CardContainer>
    </DetailedViewLayout>
  );
};

export default DetailedView;
