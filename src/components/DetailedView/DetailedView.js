import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



import { dataActions } from "../../store/datas-slice";
import DetailedViewLayout from "./DetailedViewLayout/DetailedViewLayout";
import CardContainer from "./CardContainer/CardContainer";
import CardData from "./CardData/CardData";
import Data from "../../pages/QuickView/Data/Data";
import Tank from "./Tank/Tank";
import Pump from "./Pump/Pump";
import UpDownInput from "./UpDownInput/UpDownInput";
import TimeTracker from "./TimeTracker/TimeTracker";
import ModeSelection from "./ModeSelection/ModeSelection";

import classes from "./DetailedView.module.css";

const DetailedView = () => {
  const dispatch = useDispatch();
  const { sysId } = useParams();
  const { service, drill, tank } = useSelector((state) => {
    if (!Object.keys(state.data.systemDatas).includes(sysId)) {
      return { service: null, drill: null, tank: null };
    }
    return state.data.systemDatas[sysId];
  });

  // console.log(drill.control)
  console.log(drill.control.workModes)

  // is there is no data for the system, redirect to the quick view
  if (!service) {
    return <Redirect to="/sistems" />;
  }

  const upDownInputEventHandler = (event, label, value) => {
    if(event === "inc") {
      if(["Alarma Superior", "Alarma Inferior"].includes(label)) {
        dispatch(
          dataActions.incAlarm({
            sysId,
            type: `${label === "Alarma Superior" ? "high" : "low"}`,
            step: 0.01,
          })
        );
      } else if (["Nivel superior", "Nivel inferior"].includes(label)){
        dispatch(
          dataActions.incDrillLevel({
            sysId,
            type: `${label === "Nivel superior" ? "stopLevel" : "startLevel"}`,
            step: 0.01,
          })
        );
      }
    } else if(event === "dec") {
      if(["Alarma Superior", "Alarma Inferior"].includes(label)) {
        dispatch(
          dataActions.decAlarm({
            sysId,
            type: `${label === "Alarma Superior" ? "high" : "low"}`,
            step: 0.01,
          })
        );
      } else if (["Nivel superior", "Nivel inferior"].includes(label)){
        dispatch(
          dataActions.decDrillLevel({
            sysId,
            type: `${label === "Nivel superior" ? "stopLevel" : "startLevel"}`,
            step: 0.01,
          })
        );
      }
    } else if(event === "change") {
      if(["Alarma Superior", "Alarma Inferior"].includes(label)) {
        const hasValueMoreThanTwoDecimal = value.includes(".")
          ? value.split(".")[1].length > 2
            ? true
            : false
          : false;
        
        dispatch(
          dataActions.setAlarm({
            sysId,
            type: `${label === "Alarma Superior" ? "high" : "low"}`,
            data: value === "" ? "" : hasValueMoreThanTwoDecimal ? (+value).toFixed(2) : +value,
          })
        );
      } else if (["Nivel superior", "Nivel inferior"].includes(label)){
        const hasValueMoreThanTwoDecimal = value.includes(".")
          ? value.split(".")[1].length > 2
            ? true
            : false
          : false;
        
        dispatch(
          dataActions.setDrillLevel({
            sysId,
            type: `${label === "Nivel superior" ? "stopLevel" : "startLevel"}`,
            data: value === "" ? "" : hasValueMoreThanTwoDecimal ? (+value).toFixed(2) : +value,
          })
        );
      }
    }
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
                  title="Superior:"
                  titlePosition="left"
                  value={tank.alarms.high.value}
                  unit="mts"
                />
                <Data
                  className={classes.data}
                  title="Inferior:"
                  titlePosition="left"
                  value={tank.alarms.low.value}
                  unit="mts"
                />
              </section>
            }
            largeView={
              <div className={classes["largeView-alarm-container"]}>
                <UpDownInput
                  label="Alarma Superior"
                  value={tank.alarms.high.value}
                  unit={tank.alarms.high.unit}
                  onEvent={upDownInputEventHandler}
                />
                <UpDownInput
                  label="Alarma Inferior"
                  value={tank.alarms.low.value}
                  unit={tank.alarms.low.unit}
                  onEvent={upDownInputEventHandler}
                />
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
            <Pump datas={drill} />
            <CardData title="Funcionamiento">
              <section className={classes["pump-performance__body"]}>
                <TimeTracker
                  title="Diario:"
                  hours={drill.performance.daily.hours}
                  minutes={drill.performance.daily.minutes}
                />
                <TimeTracker
                  title="Total:"
                  hours={drill.performance.total.hours}
                />
              </section>
            </CardData>
            <CardData
              title="Control"
              config
              quickView={
                <section className={classes["quickView-control-container"]}>
                  <Data
                    className={classes.data}
                    title="Modo:"
                    titlePosition="left"
                    value={drill.control.workModes[drill.workinkMode].title}
                    color={drill.control.workModes[drill.workinkMode].color}
                  />
                  <Data
                    className={classes.data}
                    title="Superior:"
                    titlePosition="left"
                    value={drill.control.stopLevel.value}
                    unit={drill.control.stopLevel.unit}
                  />
                  <Data
                    className={classes.data}
                    title="Inferior:"
                    titlePosition="left"
                    value={drill.control.startLevel.value}
                    unit={drill.control.startLevel.unit}
                  />
                </section>
              }
              largeView={
                <section className={classes["largeView-control-container"]}>
                  <ModeSelection
                    className={classes.mode}
                    sysId={sysId}
                    modes={drill.control.workModes}
                  />
                  {/* <UpDownInput
                    label="Nivel superior"
                    sysId={sysId}
                    type="high"
                  />
                  <UpDownInput
                    label="Nivel inferior"
                    sysId={sysId}
                    type="low"
                  /> */}
                  <UpDownInput
                    label="Nivel superior"
                    value={drill.control.stopLevel.value}
                    unit={drill.control.stopLevel.unit}
                    onEvent={upDownInputEventHandler}
                  />
                  <UpDownInput
                    label="Nivel inferior"
                    value={drill.control.startLevel.value}
                    unit={drill.control.startLevel.unit}
                    onEvent={upDownInputEventHandler}
                  />
                </section>
              }
            />
          </section>
        </CardData>
      </CardContainer>
    </DetailedViewLayout>
  );
};

export default DetailedView;


