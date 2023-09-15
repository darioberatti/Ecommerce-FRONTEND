import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { containsNumbers } from "../utils/utils";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();

    if (containsNumbers(name)) {
      alert("El nombre no puede contener números");
      return;
    }

    if (containsNumbers(lastName)) {
      alert("El apellido no puede contener números");
      return;
    }

    if (!email.includes("@")) {
      alert("Debe ingresar un correo electrónico válido");
      return;
    }

    if (password !== password2) {
      alert("No coinciden las contraseñas. Intentelo nuevamente");
      return;
    }
    if (password.length < 6 || !containsNumbers(password)) {
      alert(
        "La contraseña debe contener al menos 6 caracteres y al menos 1 numero"
      );
      return;
    }

    handleSubmit();
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/api/users/register", {
        name,
        lastName,
        email,
        userName,
        password,
        address,
      })
      .then(() => navigate("/login"))
      .then(() => alert("Usuario Creado"))
      .catch((err) => {
        console.log(err);
        alert("Ese correo electronico ya esta registrado");
      });
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>¡Crea tu cuenta!</h1>
      </div>
      <form onSubmit={validateForm}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Nombre completo
          </label>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Nombre"
                required
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => {
                  if (e.target.value) {
                    if (containsNumbers(name)) {
                      alert("El nombre no puede contener números");
                      return (e.target.value = "");
                    }
                  }
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                aria-label="Apellido"
                required
                onChange={(e) => setLastName(e.target.value)}
                onBlur={(e) => {
                  if (e.target.value) {
                    if (containsNumbers(lastName)) {
                      alert("El apellido no puede contener números");
                      return (e.target.value = "");
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="ejemplo@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => {
              if (e.target.value) {
                if (!email.includes("@")) {
                  alert("Debe ingresar un correo electrónico válido");
                  return (e.target.value = "");
                }
              }
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput3" className="form-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="Usuario"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Al menos 6 digitos y contener al menos 1 numero"
            id="exampleInputPassword1"
            required
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => {
              if (e.target.value) {
                if (password.length < 6 || !containsNumbers(password)) {
                  alert(
                    "La contraseña debe contener al menos 6 caracteres y al menos 1 numero"
                  );
                  return (e.target.value = "");
                }
              }
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Repite la contraseña
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Al menos 6 digitos y contener al menos 1 numero"
            id="exampleInputPassword2"
            required
            onChange={(e) => setPassword2(e.target.value)}
            onBlur={(e) => {
              if (e.target.value) {
                if (password !== password2) {
                  alert("No coinciden las contraseñas. Intentelo nuevamente");
                  return (e.target.value = "");
                }
              }
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Calle Ejemplo 123, CABA"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1" required>
            Acepto los términos y condiciones
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
