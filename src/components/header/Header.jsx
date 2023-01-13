import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>User Authentication</h1>
      <ul>
        {props.links.map((el, i) => {
          return (
            <li className="header__links-container" key={i}>
              <Link className="header__links" to={el.link}>
                {el.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
