import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("/api/users/me")
  //     .then((res) => res.data)
  //     .then((user) => setUser(user))
  //     .catch(() => console.error("Necesitas loguearte"));
  // }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to={"/"}>
            <a class="navbar-brand">
              <img
                src="" //Aquí va el logo de RFC
                alt="RFC"
                width="30"
                height="24"
              />
            </a>
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Búsqueda"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark" type="submit">
                Buscar
              </button>
            </form>
          </div>
          <div>
            {user.id ? (
              <Link>
                <button type="button" class="btn btn-dark">
                  <strong>{user.name}</strong>
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button type="button" class="btn btn-dark">
                  <strong>Acceder</strong>
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
