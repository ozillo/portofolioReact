import React from "react";
import "./NavBar.css";
import Switch from "../Switch/Switch";

const NavBar = () => {
  const changeTheme = () => {
    document.body.classList.toggle("light");
  };

  return (
    <nav>
      <h2>Marc Mateo</h2>

      <ul>
        <li>
          {/* Usamos el Switch y pasamos la función changeTheme */}
          <Switch onChangeTheme={changeTheme} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
