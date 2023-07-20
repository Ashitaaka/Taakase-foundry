import React from "react";
import { Link } from "react-router-dom";

//import components
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import TokenStorage from "../../utils/Token";

//import CSS
import "./Navbar.css";

const Navbar = () => {
  const { token, removeToken } = TokenStorage();

  return (
    <nav className="navbar">
      <div className="login_container">
        {!token ? (
          <Link to={"/login"} className="login">
            <FiLogIn />
            <p>Login</p>
          </Link>
        ) : null}
        {token ? (
          <div className="logged_in_nav">
            <Link className="add_font_button" to={"/addfont"}>
              <AiFillPlusCircle /> 
              <p>Ajouter une font</p>
            </Link>
            <div onClick={removeToken} className="logout">
              <FiLogOut />
              <p>Logout</p>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
