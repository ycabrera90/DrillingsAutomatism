import React from "react";
import ReactDOM from "react-dom";

import classes from "./LoginModal.module.css";

const ModalOverLay = (props) => (
  <div className={classes.modalOverlay}> {props.children}</div>
);

const Backdrop = (props) => {
  return (
    <div id="modalBackdrop" className={classes.backdrop}>
      {props.children}
    </div>
  );
};

const overLaysPortal = document.getElementById("overLays");

const LoginModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalOverLay>{props.children}</ModalOverLay>
        </Backdrop>,
        overLaysPortal
      )}
    </>
  );
};

export default LoginModal;
