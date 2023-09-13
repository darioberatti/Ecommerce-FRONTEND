import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const userId = useSelector((state) => state.user.value.id);
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`/api/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <>
      <div class="contenedor">
        <div class="text-center" style={{ marginTop: "20px" }}>
          <h2>Hola {user.name}!</h2>
          {user.isAdmin ? (
            <h3 style={{ marginTop: "20px" }}>Perfil de Administrador</h3>
          ) : (
            <h3>Perfil de usuario</h3>
          )}
        </div>
      </div>

      <div class="container" style={{ width: "30%" }}>
        <div style={{ marginTop: "20px" }}>
          <h4>Éstos son tus datos</h4>

          <div style={{ marginTop: "20px" }}></div>
          <h5>Nombre: {user.name}</h5>
          <br></br>
          <h5>Apellido: {user.lastName}</h5>
          <br></br>
          <h5>Dirección: {user.address}</h5>
          <br></br>
          <h5>Email: {user.email}</h5>
          <br></br>
          <h5>Si querés ver tu carrito hacé click aquí: </h5>
          <br></br>
          <Link to={"/cart"}>
            <button type="button" className="btn btn-dark">
              Ver carrito
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
