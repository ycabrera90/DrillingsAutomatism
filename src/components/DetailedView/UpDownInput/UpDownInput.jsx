import { useDispatch, useSelector } from "react-redux/es/exports";

import { dataActions } from "../../../store/datas-slice";

import classes from "./UpDownInput.module.css";

const UpDownInput = ({ label, sysId, type }) => {
  const dispatch = useDispatch();
  const alarm = useSelector((state) => state.data.systemDatas[sysId].tank.alarms[type]);

  const incrementHandler = () => {
    dispatch(dataActions.incAlarm({ sysId, type, step: 0.01 }));
  };

  const decrementHandler = () => {
    dispatch(dataActions.decAlarm({ sysId, type, step: 0.01 }));
  };

  const changeHandler = (e) => {
    dispatch(
      dataActions.setAlarm({
        sysId,
        type,
        data:
          e.target.value === ""
            ? ""
            : e.target.value.length >= 4
            ? (+e.target.value).toFixed(2)
            : +e.target.value,
      })
    );
  };

  return (
    <div className={classes["up-down-input"]}>
      <label htmlFor={label}>{label}</label>
      <section>
        <button className={classes["dec"]} onClick={decrementHandler}> - </button>
        <input
          type="number"
          step="0.1"
          id={label}
          value={alarm.value}
          onChange={changeHandler}
          maxLength={4}
        ></input>
        <span>{alarm.unit}</span>
        <button className={classes["inc"]} onClick={incrementHandler}> + </button>
      </section>
    </div>
  );
};

export default UpDownInput;
