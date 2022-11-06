import React, { useEffect, useState } from "react";
import Input from "./Input";
import classes from "./Login.module.css";

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageBoxIsValid, setMessageBoxIsValid] = useState(false);
  const [checkBoxIsValid, setCheckBoxIsValid] = useState(false);

  const [validateNameHandler, setNameHandler] = useState(false);
  const [validateEmailHandler, setEmailHandler] = useState(true);
  const [validateMessageHandler, setMessageHandler] = useState(false);
  const [validateLastNameHandler, setLastNameHandler] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [textAreaErrorMessage, setErrorMessage] = useState("");

  const emailChangeHandler = (event) => {
    if (event.target.value.includes("@")) {
      setEmailIsValid(true);
      
    } 
    
    if (event.target.value.trim().length >= 1) {
      setEmailErrorMessage("");
    }
  };

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 1) {
      setNameIsValid(true);
     
    }
  };

  const checkBoxValidity = (event) => {
   
    if (event.target.checked === true) {
      setCheckBoxIsValid(true);
      
    }
  };

  const messageBoxChangeHandler = (event) => {
   if (event.target.value.trim().length >= 1) {
      setMessageBoxIsValid(true);
     
      setErrorMessage("");
    }
  };

  const nameValidatorHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setNameHandler(true);
    } else {
      setNameHandler(false);
    }
  };

  const emailValidatorHandler = (event) => {
    if (!event.target.value.includes("@")) {
      setEmailHandler(false);
      setEmailErrorMessage("Please enter a valid email address");
    } else {
      setEmailHandler(true);
      setEmailErrorMessage("");
    }
  };

  const lastNameValidatorHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setLastNameHandler(true);
    } else {
      setLastNameHandler(false);
    }
  };

  const messageBoxValidatorHandler = (event) => {
    // console.log(event.target.value);
    if (event.target.value.trim().length === 0) {
     
      setMessageHandler(true);
      setErrorMessage("Please enter a message");
    } else {
      setMessageHandler(false);
      setErrorMessage("");
    }
  };

  useEffect(() => {
    if (nameIsValid && emailIsValid && checkBoxIsValid && messageBoxIsValid) {
      setFormIsValid(true);
    }
  }, [nameIsValid, emailIsValid, checkBoxIsValid, messageBoxIsValid]);

  return (
    <div className={classes.contactPageForm}>
      <h2>Contact Me</h2>
      <p className={classes.ctd}>
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form>
        <div className={classes.nameInputFields}>
          <span>
            <label htmlFor="FirstName">First Name</label>
            <Input
              onBlur={nameValidatorHandler}
              className={`${classes.nameInputField} ${
                validateNameHandler === true ? classes.invalid : null
              }`}
              id="first_name"
              type="text"
              placeholder="Enter your first name"
            />
          </span>
          <span>
            <label htmlFor="lastName">Last Name</label>
            <Input
              onBlur={lastNameValidatorHandler}
              className={`${classes.nameInputField} ${
                validateLastNameHandler === true ? classes.invalid : null
              }`}
              onChange={nameChangeHandler}
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </span>
        </div>
        <div className={classes.mailInputFields}>
          <label htmlFor="email">Email</label>
          <Input
            onBlur={emailValidatorHandler}
            onChange={emailChangeHandler}
            className={`${classes.mailInputField} ${
              validateEmailHandler === false ? classes.invalid : null
            }`}
            id="email"
            type="email"
            placeholder="yourname@email.com"
          />
          <span className={classes.errorMessage}>{emailErrorMessage}</span>
        </div>
        <div className={classes.messageBox}>
          <label htmlFor="message">Message</label>
          <textarea
            onBlur={messageBoxValidatorHandler}
            className={`${classes.textArea} ${
              validateMessageHandler === true ? classes.invalid : null
            }`}
            id="message"
            onChange={messageBoxChangeHandler}
            placeholder=" Send me a message and i'll reply you as soon as possible"
          ></textarea>
          <span className={classes.errorMessage}>{textAreaErrorMessage}</span>
        </div>

        <div className={classes.checkBox}>
          <input type="checkbox" onChange={checkBoxValidity} />
          <p>
            You agree to providing your data to Kayode Uthman who may contact
            you.
          </p>
        </div>
        <button
          disabled={!formIsValid}
          id="btn__submit"
          className={formIsValid ? classes.Valid : classes.Button}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Login;
