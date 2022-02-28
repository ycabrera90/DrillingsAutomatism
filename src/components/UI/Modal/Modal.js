import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const ModalOverLay = (props) => (
  <div className={classes.modalOverlay}> {props.children}</div>
);

const Backdrop = (props) => {
  const backdropOnClickHandler = (event) => {
    if (event.target.id === "modalBackdrop") {
      props.onClick();
    }
  };

  return (
    <div
      id="modalBackdrop"
      onClick={backdropOnClickHandler}
      className={classes.backdrop}
    >
      {props.children}
    </div>
  );
};

const overLaysPortal = document.getElementById("overLays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onBackdropClick}>
          <ModalOverLay>{props.children}</ModalOverLay>
        </Backdrop>,
        overLaysPortal
      )}
    </>
  );
};

export default Modal;
