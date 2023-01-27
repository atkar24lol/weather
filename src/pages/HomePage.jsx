import React from "react";
import Search from "../components/Search";
import Weather from "../components/Weather";
import { Routes, Route, Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <Search />
      <Weather />
    </div>
  );
}

export default HomePage;
