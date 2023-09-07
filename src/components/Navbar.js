import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const usuario = useSelector((state)=> state.user.value)

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
            {usuario.name ? (
              <Link>
                <button type="button" class="btn btn-dark">
                  <strong>{usuario.name}</strong>
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
