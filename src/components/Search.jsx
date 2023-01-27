import React from "react";
import module from "./Search.module.scss";

function Search(props) {
  return (
    <div className={module.content}>
      {/* <h1>Weather view</h1> */}
      <div>
        <input type="search" name="q" placeholder="Искать здесь..." />
        <input value="" type="submit" />
      </div>
    </div>
  );
}

export default Search;
