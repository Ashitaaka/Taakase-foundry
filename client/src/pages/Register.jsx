import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

//import components
import { CgClose } from "react-icons/cg";
import { postUserRegister } from "../utils/httpServices";
import TokenStorage from "../utils/Token";

//import CSS
import "./Register.css";

const Register = () => {

  const inputPasswordRef = useRef(null); //create a reference to select password field

  const { setToken } = TokenStorage();// To set the localStorage with connected userInfos

  const [errors, setErrors] = useState();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
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

    postUserRegister(form)
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
    <div className="register_page">
      <Link to={"/"}>
        <CgClose size={30} className="closing_cross" />
      </Link>
      <div className="register_page_content">
        <div className="title">
          <h1>Register</h1>
          <p>
            Déjà inscrit ?{" "}
            <Link className="lien" to={"/login"}>
              Connectez-vous
            </Link>
          </p>
        </div>
        <form
          className="register_form"
          onChange={handleForm}
          onSubmit={sendingForm}
        >
          <div className="firstname_field">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom"
              required
            />
          </div>
          <div className="lastname_field">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Nom"
              required
            />
          </div>
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

export default Register;
