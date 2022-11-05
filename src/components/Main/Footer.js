import React from "react";
import classes from "./Footer.module.css";
import zuriLogo from "../../Images/Vector.png";
import IFGLogo from "../../Images/I4G.png";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <img src={zuriLogo} alt="Zuri Logo" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={IFGLogo} alt="IFG Logo" />
    </div>
  );
};

export default Footer;
