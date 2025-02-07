import React from "react";
import logo from "../../assets/img/LOGO.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";
export const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="Logo textuel Kasa avec une maison à la place de la première lettre A"
        />
      </div>
      <nav>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};
