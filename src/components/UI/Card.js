import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <a
      href={props.href}
      id={props.id}
      className={`${classes.Card} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </a>
  );
};

export default Card;
