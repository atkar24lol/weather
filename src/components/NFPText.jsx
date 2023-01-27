import React from "react";
import module from "./NFPText.module.scss";

function NFPText(props) {
  return (
    <div className={module.text}>
      <div>
        <h1>404 </h1>
        <p>
          Sorry, the page cannot be found. Please use the menu or search bar to
          find what you need or contact us for assistance.
        </p>
      </div>
    </div>
  );
}

export default NFPText;
