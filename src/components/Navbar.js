import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoRFC from "../assets/Black White Modern Concept Football Club Logo.png";


const Navbar = () => {
  const usuario = useSelector((state) => state.user.value);

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "lightgray" }}>
        <div className="container-fluid" >
          <Link to={"/"}>
            <img className="navbar-brand" src={LogoRFC} alt="RFC" width="60" height="70" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Buscar
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
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
                        <button className="dropdown-item">
                          Desloguearse
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <ul className="navbar-nav ml-auto" >
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
