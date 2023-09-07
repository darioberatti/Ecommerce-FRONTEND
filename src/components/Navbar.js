import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => setUser(user))
      .catch(() => console.error("Necesitas loguearte"));
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="" //Aquí va el logo de RFC
              alt="RFC"
              width="30"
              height="24"
            />
          </a>
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
              <a class="btn btn-secondary" href="/profile" role="button">
                <strong>{user.name}</strong>
              </a>
            ) : (
              <a class="btn btn-secondary" href="/login" role="button">
                <strong>Acceder</strong>
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
