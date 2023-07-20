import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

//imports components/pages
import Footer from "./components/footer/Footer";
import FontList from "./pages/FontList";
import FontDetails from "./pages/FontDetails";
import Header from "./components/header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TokenStorage from "./utils/Token";
import AddFont from "./pages/AddFont";

//imports CSS
import "./App.css";

function App() {
  const { token, removeToken, setToken } = TokenStorage();

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addfont" element={<AddFont />} />
        </Routes>

        <Header removeToken={removeToken} />

        <Routes>
          <Route path="/" element={<FontList />} />
          <Route path="/font/:id" element={<FontDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
