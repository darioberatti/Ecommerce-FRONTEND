import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoRFC from "../assets/Black White Modern Concept Football Club Logo.png";
import axios from "axios";
import { onSubmitReload } from "../utils/utils.js";
import { useEffect, useState } from "react";

const Navbar = ({ categories }) => {
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

  console.log("categories navbar -->", categories);

  return (
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

          <div className="dropdown ml-2">
            <button
              className="btn btn-outline-dark dropdown-toggle"
              type="button"
              id="categoriasDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{marginLeft:"5%"}}
            >
              Categorías
            </button>
            <ul className="dropdown-menu" aria-labelledby="categoriasDropdown">
              {categories[0] ? (
                categories?.map((category) => {
                  return (
                    <li>
                      <Link to={`/${category.type.toLowerCase()}`}>
                        <button className="dropdown-item">
                          {category.type}
                        </button>
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li>
                  <p>No hay categorias</p>
                </li>
              )}
              {usuario.isAdmin ? (
                <>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"/edit-categories"}>
                      <button className="dropdown-item">
                        Editar Categorias
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {usuario.name ? (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>{usuario.name}</strong>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link to={"/cart"}>
                      <button className="dropdown-item">Ver tu carrito</button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/history"}>
                      <button className="dropdown-item">Compras</button>
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
                    <button className="dropdown-item" onClick={handleLogout}>
                      Desloguearse
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link to={"/login"}>
                  <button type="button" className="btn btn-dark">
                    <strong>Acceder</strong>
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
