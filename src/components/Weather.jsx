import React from "react";
import module from './Weather.module.scss';

function Weather(props) {
  return (
    <div className={module.box}>
      <h1>Moscow</h1>
      <div className={module.img}></div>
      <h2>2°c</h2>
      <h2>Wednesday</h2>
      <h2>28 jan 2023</h2>
    </div>
  );
}

export default Weather;
