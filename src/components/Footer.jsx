import React from "react";
import module from "./Footer.module.scss";

function Footer(props) {
  return (
    <div className={module.footer}>
      <div className={module.logo}></div>
      <p>atkar24lol - 2023</p>
    </div>
  );
}

export default Footer;
