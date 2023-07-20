import React from "react";
import { Link } from "react-router-dom";

//import components
import Navbar from "../navbar/Navbar";

//import css
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>taakase</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
