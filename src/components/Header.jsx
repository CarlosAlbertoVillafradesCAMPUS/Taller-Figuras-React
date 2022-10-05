import React from "react";
import salida from '../assets/icons/salida.png';
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={salida} alt="salida" />
      </a>
      <p>Taller de Javascript Basico</p>
    </header>
  );
};

export default Header;
