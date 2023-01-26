import React from "react";
import module from "./scss-modules/Weather.module.scss";

function Weather(props) {
  return (
    <div className={module.box}>
      <h1>Москва</h1>
      <div className={module.img}></div>
      <h2>2°c</h2>
      <h2>среда</h2>
      <h2>28 января 2023</h2>
    </div>
  );
}

export default Weather;
