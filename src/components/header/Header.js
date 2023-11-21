import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        LOGO
      </Link>
    </header>
  );
};

export default Header;
