import React, { useState } from "react";
import "./Header.css";
import Cart from "../cart/cart";
import { useNavigate, useLocation } from "react-router-dom";

function Header({ cartValue, onCartClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/";

  return (
    <header className={`header ${isHome ? "header--home" : "header--solid"}`}>
      <nav className="nav">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="src/assets/menu.svg" alt="menu" />
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => navigate("/plants")}>Plants</li>
          <li onClick={() => navigate("/pots")}>Pots</li>
          <li onClick={() => navigate("/sale")}>Sale</li>
          <li>Subscriptions</li>
          <li>Care</li>
        </ul>

        <div className="logo" onClick={() => navigate("/")}>
          <img src="src/assets/sproutlogo.svg" alt="Sprout Logo" />
          <span>Sprout</span>
        </div>

        <div className="actions">
          <button className="login-btn">
            <img src="src/assets/login.svg" alt="login" />
            <span>Log In</span>
          </button>

          <span className="search">
            <img src="src/assets/search.svg" alt="search" />
          </span>
        </div>

        <div onClick={onCartClick}>
          <Cart cartValue={cartValue} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
