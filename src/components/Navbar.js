import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoRFC from "../assets/Black White Modern Concept Football Club Logo.png";
import axios from "axios";
import { onSubmitReload } from "../utils/utils.js";
import { useState } from "react";

const Navbar = () => {
  const usuario = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchName.length === 0
      ? alert("Debes ingresar una búsqueda")
      : navigate(`/search-results?name=${searchName}`);
    setSearchName("");
  };

  const handleLogout = () => {
    axios.post("/api/users/logout").then(() => {
      onSubmitReload();
      navigate("/");
      alert("Usuario deslogueado");
    });
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#d8d8d8" }}
      >
        <div className="container-fluid">
          <Link to={"/"}>
            <img
              className="navbar-brand"
              src={LogoRFC}
              alt="RFC"
              width="70"
              height="80"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <button
                className="btn btn-outline-dark"
                type="submit"
                onClick={handleSearch}
              >
                Buscar
              </button>
            </form>
            <div style={{ marginLeft: "1200px" }}></div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                {usuario.name ? (
                  <>
                    <button
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong>{usuario.name}</strong>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to={"/cart"}>
                          <button className="dropdown-item">
                            Ver tu carrito
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/profile"}>
                          <button className="dropdown-item">Perfil</button>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Desloguearse
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"}>
                        <button type="button" className="btn btn-dark">
                          <strong>Acceder</strong>
                        </button>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
