import React from "react";
import module from "./scss-modules/Header.module.scss";

function Header(props) {
  return (
    <div className={module.header}>
      {/* <ul>
        <li>
          <a href="#">Main</a>
        </li>
        <li>
          <a href="#">Page2</a>
        </li>
        <li>
          <a href="#">Page3</a>
        </li>
        <li>
          <a href="#">Page4</a>
        </li>
      </ul> */}

      <h1> weather</h1>
    </div>
  );
}

export default Header;
