import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoRFC from "../assets/Black White Modern Concept Football Club Logo.png";


const Navbar = () => {
  const usuario = useSelector((state) => state.user.value);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "lightgray" }}
      >
        <div class="container-fluid">
          <Link to={"/"}>
            <img
              class="navbar-brand"
              src={LogoRFC}
              alt="RFC"
              width="60"
              height="70"
            />
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
            {usuario.name ? (

              <>
                <button
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>{usuario.name}</strong>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" href="#">
                      Ver tu carrito
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" href="#">
                      Perfil
                    </button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <button class="dropdown-item" href="#">
                      Desloguearse
                    </button>
                  </li>
                </ul>
              </>

              //<div>
                //<Link>
                  //<button type="button" class="btn btn-dark">
                   // <strong>{usuario.name}</strong>
                 // </button>
                //</Link>
                //<Link to={"/cart"}>
                  //<button>Ver Carrito</button>
                //</Link>
             // </div>

            ) : (
              <Link to={"/login"}>
                <button type="button" class="btn btn-dark">
                  <strong>Acceder</strong>
                </button>
              </Link>
            )}
          </div>
          <div style={{ marginRight: "10px" }}></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
