import React from "react";
import classes from "./Login.module.css";

import useInput from "../hooks/use-input";

// import Modal from "../UI/Modal/Modal";
import LoginModal from "./LoginModal/LoginModal";
import LoginInput from "./LoginInput/LoginInput";
import LogInButton from "./LogInButton/LogInButton";
import SpyLogo from "../UI/SpyLogo/SpyLogo";

const Login = () => {
  const onLoginButtonHandler = () => {
    console.log("everithing Ok");
  };

  const {
    value: user,
    isValid: userIsValid,
    hasError: userInputHasError,
    inputChangeHandler: userInputChangeHandler,
    inputBlurHandler: userInputBlurHandler,
    inputKeyDownHandler: userInputKeyDownHandler,
    resetInput: resetUserInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    inputKeyDownHandler: passwordInputKeyDownHandler,
    resetInput: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (userIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    console.log("asdasdadadff");

    if (!formIsValid) {
      return;
    }

    resetUserInput();
    resetPasswordInput();
  };

  return (
    <LoginModal>
      <form onSubmit={formSubmissionHandler} className={classes.form}>
        <h1>Bienvenido</h1>
        <h3>Loguéate para continuar</h3>
        <LoginInput
          text="USUARIO"
          msg={userInputHasError && "Inserte su usario de SPYMOVIL"}
          input={{
            type: "text",
            autoComplete: "username",
            value: user,
            className: userInputHasError ? classes.invalid : "",
            onChange: userInputChangeHandler,
            onBlur: userInputBlurHandler,
            onKeyDown: userInputKeyDownHandler,
          }}
        />
        <LoginInput
          text="CONTRASEÑA"
          msg={passwordInputHasError && "No olvide colocar su contraseña"}
          input={{
            type: "password",
            autoComplete: "current-password",
            value: password,
            className: passwordInputHasError ? classes.invalid : "",
            onChange: passwordInputChangeHandler,
            onBlur: passwordInputBlurHandler,
            onKeyDown: passwordInputKeyDownHandler,
          }}
        />
        {
          <LogInButton
            className={classes["login-button"]}
            text="Ingresar"
            attrib={{
              type: "submit",
              onClick: onLoginButtonHandler,
              disabled: !formIsValid,
            }}
          />
        }
      </form>
      <SpyLogo />
    </LoginModal>
  );
};

export default Login;
