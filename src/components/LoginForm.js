import axios from "axios";
import React, { Component, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";


const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

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
      .then(()=> navigate("/"))
      .catch((err) => console.log(err));
  };

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { email, password } = this.state;
  // };

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              We'll never share your email with anyone else.
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
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Iniciar sesión
          </button>
        </form>
        <Link to={"/register"}>
          <button type="submit" class="btn btn-primary">
            Registrarse
          </button>
        </Link>
      </div>
    );
  
}

export default LoginForm;

{
  /* <div>
<h2>Iniciar sesión</h2>
<form onSubmit={this.handleSubmit}>
  <div>
    <label>Email:</label>
    <input
      type="email"
      name="email"
      value={email}
      onChange={this.handleInputChange}
    />
  </div>
  <div>
    <label>Contraseña:</label>
    <input
      type="password"
      name="password"
      value={password}
      onChange={this.handleInputChange}
    />
  </div>
  <button type="submit">Iniciar sesión</button>
</form>
</div> */
}
