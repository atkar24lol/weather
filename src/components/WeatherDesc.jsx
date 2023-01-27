import React from "react";
import module from "./WeatherDesc.module.scss";

function WeatherDesc(props) {
  return (
    <div className={module.desc}>
      <p>
        Welcome to our weather website! We provide you with accurate and
        up-to-date information about the weather in your city. Our team of
        meteorologists work tirelessly to ensure that you have the most reliable
        and current information about the weather conditions in your area. Our
        website is easy to use, simply enter your city name in the search bar
        and you will be provided with a detailed forecast including temperature,
        humidity, wind speed, and more. We also offer a 7-day forecast so you
        can plan ahead for the week. In addition to the weather forecast, we
        also provide information on severe weather alerts, sun and moon phases,
        and historical weather data. Our website is designed to be
        user-friendly, so you can quickly and easily access the information you
        need. We are committed to providing you with the best weather
        information possible. We strive to make our website a valuable resource
        for anyone who wants to stay informed about the weather in their city.
        Thank you for choosing our website for your weather needs.
      </p>
    </div>
  );
}

export default WeatherDesc;
