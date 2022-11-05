import React from "react";
import classes from "./ErrorPage.module.css";
import Arrow from "../../Images/arrow-left.png";

const ErrorPage = () => {
  return (
    <div className={classes.errorBox}>
      <p className={classes.errorCode}>404 error</p>
      <h2 className={classes.errorMessage}>We can't find that page</h2>
      <p className={classes.errorDetails}>
        Sorry, the page you are looking for doesn't exist or has been moved
      </p>

      <div className={classes.btnBox}>
        <span onClick={back}>
          <a href="/Contact" className={classes.backButton}>
            <img src={Arrow} alt="Left Arrow" /> <span>Go Back</span>
          </a>
        </span>
        <a href="/" className={classes.homeButton}>
          Take me home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
