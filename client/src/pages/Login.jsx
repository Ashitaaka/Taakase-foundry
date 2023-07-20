import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

//import components
import { CgClose } from "react-icons/cg";
import { postUserLogin } from "../utils/httpServices";
import TokenStorage from "../utils/Token";

//import CSS
import "./Login.css";

const Login = () => {

  const inputPasswordRef = useRef(null); //create a reference to select password field

  const { setToken } = TokenStorage();// To set the localStorage with connected userInfos

  const [errors, setErrors] = useState();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [key]: value,
    });
  };

  const sendingForm = (e) => {
    e.preventDefault();

    postUserLogin(form)
      .then((res) => {
        setToken(res);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
        setErrors(error);
      });

    inputPasswordRef.current.value = "";
  };

  return (
    <div className="login_page">
      <Link to={"/"}>
        <CgClose size={30} className="closing_cross" />
      </Link>
      <div className="login_page_content">
        <div className="title">
          <h1>Login</h1>
          <p>
            Nouveau ?{" "}
            <Link className="lien" to={"/register"}>
              Créez un compte
            </Link>
          </p>
        </div>
        <form
          className="login_form"
          onChange={handleForm}
          onSubmit={sendingForm}
        >
          <div className="email_field">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="password_field">
            <label htmlFor="password">Mot de passe</label>
            <input
              ref={inputPasswordRef}
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              required
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
