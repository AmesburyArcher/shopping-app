import React from "react";
import { Link } from "react-router-dom";

const Nav = function () {
  return (
    <nav className="nav__bar">
      <h1>ALLO CARS</h1>
      <ul>
        <Link to="/catalogue">
          <li>Catalogue</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/shopping-cart">
          <li>Shopping Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
