import React from "react";
import module from "./scss-modules/Footer.module.scss";

function Footer(props) {
  return (
    <div className={module.footer}>
      <p>Это футер</p>
    </div>
  );
}

export default Footer;
