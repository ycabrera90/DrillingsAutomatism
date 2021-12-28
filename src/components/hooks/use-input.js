import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  // with these lines I listen the autofill event and write some space for avoid the prestyled by default
  const inputKeyDownHandler = (e) => {
    if (e.key === "Unidentified") {
      setTimeout(() => {
        setEnteredValue(`${e.target.value} `);
      }, 1);
    }
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    inputKeyDownHandler,
    resetInput,
  };
};

export default useInput;

// lo siguiente es la implementacion del formulario usando el hook previamente creado
/////////////////////////////////////////// BasicForm.js ///////////////////////////////////////////
// import React from "react";
// import useInput from "../hooks/use-input";

// const BasicForm = () => {
//   const {
//     value: firstName,
//     isValid: firstNameIsValid,
//     hasError: firstNameInputHasError,
//     valueChangeHandler: firstNameInputChangeHandler,
//     inputBlurHandler: firstNameInputBlurHandler,
//     resetInput: resetFirstNameInput,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: lastName,
//     isValid: lastNameIsValid,
//     hasError: lastNameInputHasError,
//     valueChangeHandler: lastNameInputChangeHandler,
//     inputBlurHandler: lastNameInputBlurHandler,
//     resetInput: resetLastNameInput,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: email,
//     isValid: emailIsValid,
//     hasError: emailInputHasError,
//     valueChangeHandler: emailInputChangeHandler,
//     inputBlurHandler: emailInputBlurHandler,
//     resetInput: resetEmailInput,
//   } = useInput((value) => value.includes("@") && value.includes("."));

//   let formIsValid = false;
//   if (firstNameIsValid && lastNameIsValid && emailIsValid) {
//     formIsValid = true;
//   }

//   const formSubmissionHandler = (e) => {
//     e.preventDefault();

//     if (!formIsValid) {
//       return;
//     }
//     resetFirstNameInput();
//     resetLastNameInput();
//     resetEmailInput();
//   };

//   const firstNameInputClasses = firstNameIsValid
//     ? "form-control invalid"
//     : "form-control";

//   const lastNameInputClasses = lastNameIsValid
//     ? "form-control invalid"
//     : "form-control";

//   const emailInputClasses = emailIsValid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className="control-group">
//         <div className="form-control">
//           <label htmlFor="name">First Name</label>
//           <input
//             type="text"
//             id="name"
//             value={firstName}
//             className={firstNameInputClasses}
//             onChange={firstNameInputChangeHandler}
//             onBlur={firstNameInputBlurHandler}
//           />
//           {firstNameInputHasError && (
//             <p className="error-text"> Name must no be emty</p>
//           )}
//         </div>
//         <div className="form-control">
//           <label htmlFor="name">Last Name</label>
//           <input
//             type="text"
//             id="name"
//             value={lastName}
//             className={lastNameInputClasses}
//             onChange={lastNameInputChangeHandler}
//             onBlur={lastNameInputBlurHandler}
//           />
//           {lastNameInputHasError && (
//             <p className="error-text"> Name must no be emty</p>
//           )}
//         </div>
//       </div>
//       <div className="form-control">
//         <label htmlFor="name">E-Mail Address</label>
//         <input
//           type="text"
//           id="name"
//           value={email}
//           className={emailInputClasses}
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//         />
//         {emailInputHasError && (
//           <p className="error-text"> Please enter a valid email</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default BasicForm;

// Se muestra aqui el fragmento css para invalidar el boton de submit.
// button:disabled,
// button:disabled:hover,
// button:disabled:active {
//   background-color: #ccc;
//   color: #292929;
//   border-color: #ccc;
//   cursor: not-allowed;
// }
