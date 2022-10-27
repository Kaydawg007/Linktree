import React from "react";
import Card from "../UI/Card";
import classes from "./Links.module.css";
import slackLogo from "../../Images/slack.png";
import githubLogo from "../../Images/Icon.png";

const Links = () => {
  const hyperlinks = [
    {
      Title: "Twitter Link",
      Href: "https://twitter.com/KayodeUthman2",
      id: "myTwitterAcct",
    },
    {
      Title: "Zuri Team",
      Href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      Title: "Zuri Books",
      Href: "https://books.zuri.team/",
      id: "books",
    },
    {
      Title: "Python Books",
      Href:
        "https://books.zuri.team/python-for-beginners?ref_id=<kayodeuthman2>",
      id: "books__python",
    },
    {
      Title: "Background Check for Coders",
      Href: "https://background.zuri.team",
      id: "pitch",
    },
    {
      Title: "Design Books",
      Href: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <React.Fragment>
      <ul className={classes.Ul}>
        {hyperlinks.map((items) => (
          <Card href={items.Href} className={classes.Link} id={items.id}>
            {items.Title}
          </Card>
        ))}
      </ul>
      <div className={classes.Logo}>
        <img src={slackLogo} alt="Slack Logo" />
        <img src={githubLogo} alt="Github Logo" />
      </div>
    </React.Fragment>
  );
};

export default Links;
