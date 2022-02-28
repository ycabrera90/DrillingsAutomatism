import React from "react";
import classes from "./FormButton.module.css";

const FormButton = (props) => {
  const highlightedClass = props.highlighted ? classes.highlighted : "";
  const disabledClass = props.attrib.disabled ? classes.disabled : "";
  return (
    <button
      className={`${props.className} ${classes.button} ${highlightedClass} ${disabledClass}`}
      {...props.attrib}
    >
      {props.text}
    </button>
  );
};

export default FormButton;

/////////////////////////////////////////
{/* <FormButton
  text="Confirm"
  highlighted={true}
  attrib={{
    type: "button",
    onClick: props.onCancel,
    disabled: !isFormValid,
  }}
/>; */}
