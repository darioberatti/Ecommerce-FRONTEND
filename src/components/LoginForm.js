import axios from "axios";
import React, { Component, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import { onSubmitReload } from "../utils/utils";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", {
        email: email,
        password: password,
      })
      .then(() => {
        navigate("/");
        onSubmitReload();
        alert("Bienvenido!");
      })
      .catch((err) => {
        console.log(err);
        alert("Email o contraseña incorrectos");
      });
  };

  return (
    <div
      style={{
        width: "60%",
        margin: "0 auto",
        textAlign: "center",
        border: "2px solid black",
        padding: "3%",
      }}
    >
      <form onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // value={email}
            onChange={onChangeEmail}
            required
          />
          <div id="emailHelp" class="form-text">
            No compartiremos tus datos con nadie
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            // value={password}
            onChange={onChangePassword}
            require
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
      <br></br>
      <p>No tienes una cuenta?</p>
      <Link to={"/register"}>
        <button type="submit" class="btn btn-primary">
          Registrarse
        </button>
      </Link>
    </div>
  );
};

export default LoginForm;
