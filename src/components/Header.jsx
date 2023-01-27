import React from "react";
import module from "./Header.module.scss";
import { Route, Routes, Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={module.header}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to='/aa'>Page3</Link>
        </li>
        <li>
          <Link to='/44'>Page4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
