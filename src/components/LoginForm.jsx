import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onSubmitReload } from "../utils/utils";
import { Toaster, toast } from "sonner";

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
      .then((result) => {
        toast.success("Bienvenido! Has iniciado sesión");

        navigate("/");
      })

      .catch((err) => {
        console.log(err);
        toast.error("Email o contraseña incorrectos");
      });
  };

  return (
    <div className="retroForm">
      <Toaster richColors position="top-center" />
      <form onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeEmail}
            required
          />
          <div id="emailHelp" className="form-text">
            No compartiremos tus datos con nadie
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
            require
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
      <br></br>
      <p>No tienes una cuenta?</p>
      <Link to={"/register"}>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </Link>
    </div>
  );
};

export default LoginForm;
