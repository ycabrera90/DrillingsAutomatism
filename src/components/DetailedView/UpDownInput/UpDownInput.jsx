import classes from "./UpDownInput.module.css";

const UpDownInput = ({ label, type, value, unit, onEvent }) => {
  const changeInputHandler = (inputValue) => {
    const hasValueMoreThanTwoDecimal = inputValue.includes(".")
      ? inputValue.split(".")[1].length > 2
        ? true
        : false
      : false;

    return onEvent(
      "change",
      type,
      inputValue === ""
        ? ""
        : hasValueMoreThanTwoDecimal
        ? (+inputValue).toFixed(2)
        : +inputValue
    );
  }
  return (
    <div className={classes["up-down-input"]}>
      <label htmlFor={label}>{label}</label>
      <section>
        <button 
          className={classes["dec"]} 
          onClick={() => onEvent('dec', type)}
        > - </button>
        <input
          type="number"
          step="0.1"
          id={label}
          value={value}
          onChange={(e) => changeInputHandler(e.target.value)}
          maxLength={4}
        />
        <span>{unit}</span>
        <button 
          className={classes["inc"]} 
          onClick={() => onEvent('inc', type)}
        > + </button>
      </section>
    </div>
  );
};

export default UpDownInput;
