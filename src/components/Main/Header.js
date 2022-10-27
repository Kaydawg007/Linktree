import React from "react";

import shareBtnHoverState from "../../Images/shareBtnHoverState.png";
import shareBtn from "../../Images/shareBtn.png";
import mobileShareBtn from "../../Images/mobileShareBtnDefault.png";
import mobileShareBtnPressed from "../../Images/mobileShareBtnPressed.png";
import classes from "./Header.module.css";
import ProfilePicture from "../../Images/UttyImg.png";

const Header = () => {
  return (
    <div className={classes.profileDetails}>
      <img
        className={`${classes.shareBtnHoverState}`}
        src={shareBtnHoverState}
        alt="share Button"
      />
      <img className={classes.shareBtn} src={shareBtn} alt="share Button" />

      <img
        className={classes.mobileShareBtn}
        src={mobileShareBtn}
        alt="mobile share Button"
      />
      <img
        className={classes.mobileShareBtnPressed}
        src={mobileShareBtnPressed}
        alt="share Button"
      />
      <img
        className={classes.profile__img}
        id="profile__img"
        src={ProfilePicture}
        alt="Profile-Picture"
      />
      <h2 className={classes.profileName}>KayodeUthman2</h2>
      {/* <p id="slack">kayodeuthman2</p> */}
    </div>
  );
};

export default Header;
