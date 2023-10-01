import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="icon-container">
        <h1>PWL TIM 3</h1>
      </div>
      <ul>
        <li>
          <NavLink to={"/"}>Beranda</NavLink>
        </li>
        <li>
          <NavLink to={"about"}>Tentang</NavLink>
        </li>
        <li>
          <NavLink to={"contact"}>Kontak</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
