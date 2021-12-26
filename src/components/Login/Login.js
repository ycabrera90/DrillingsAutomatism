import React from "react";
import classes from "./Login.module.css";

import { useState } from "react";

import Modal from "../UI/Modal/Modal";
import LoginInput from "./LoginInput/LoginInput";
import LogInButton from "./LogInButton/LogInButton";

const Login = () => {
  const [userInputValue, setUserInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const userInputChangeHandler = (e) => {
    setUserInputValue(e.target.value);
  };

  const autoCompleteInputUserHandler = (e) => {
    if (e.key === "Unidentified") {
      setTimeout(() => {
        setUserInputValue(`${e.target.value} `);
      }, 1);
    }
  };

  const passwordInputChangeHandler = (e) => {
    setPasswordInputValue(e.target.value);
  };

  const autoCompleteInputPasswHandler = (e) => {
    if (e.key === "Unidentified") {
      setTimeout(() => {
        setPasswordInputValue(`${e.target.value} `);
      }, 1);
    }
  };

  return (
    <Modal>
      <form className={classes.form}>
        <h1>Bienvenido</h1>
        <h3>Loguéate para continuar</h3>
        <LoginInput
          text="USUARIO"
          // msg={cityInputHasError && "The city field must not be emty"}
          input={{
            type: "text",
            autoComplete: "username",
            value: userInputValue,
            // className: cityInputHasError ? classes.invalid : "",
            onChange: userInputChangeHandler,
            onKeyDown: autoCompleteInputUserHandler,
            // onBlur: cityInputBlurHandler,
          }}
        />
        <LoginInput
          text="CONTRASEÑA"
          // msg={cityInputHasError && "The city field must not be emty"}
          input={{
            type: "password",
            // autoComplete: "new-password",
            autoComplete: "current-password",
            value: passwordInputValue,
            // className: cityInputHasError ? classes.invalid : "",
            onChange: passwordInputChangeHandler,
            onKeyDown: autoCompleteInputPasswHandler,
            // onBlur: cityInputBlurHandler,
          }}
        />
        {
          <LogInButton
            className={classes["login-button"]}
            text="Ingresar"
            attrib={{
              type: "button",
              // onClick: props.onCancel,
              // disabled: true,
            }}
          />
        }
      </form>
    </Modal>
  );
};

export default Login;
