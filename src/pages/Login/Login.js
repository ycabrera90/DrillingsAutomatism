import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import useInput from "../../hooks/use-input";
import { authActions } from "../../store/auth-slice";

import LoginModal from "./LoginModal/LoginModal";
import LoginInput from "./LoginInput/LoginInput";
import LogInButton from "./LogInButton/LogInButton";
import SpyLogo from "../../components/UI/SpyLogo/SpyLogo";

import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  const history = useHistory();
  // const auth = useContext(AuthContext);
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

    if (!formIsValid) {
      return;
    }

    resetUserInput();
    resetPasswordInput();

    try {
      // fetch data to backend and the answer is
      // {
      //   userId: existingUser.id,
      //   email: existingUser.email,
      //   token: token,
      // }
      const responseData = {
        userId: "123",
        email: "yosniel.ch@gmail.com",
        token: "thisIsMyTokenID",
      };
      dispatch(authActions.login(responseData));
      history.push("/sistems");
    } catch (err) {
      alert("the login fail");
    }
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
