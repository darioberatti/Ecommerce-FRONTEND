import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/user";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditMode(true);
    setEditedUser(user);
  };

  const handleBackClick = () => {
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    axios
      .put(`/api/users/${user.id}`, editedUser)
      .then((response) => {
        dispatch(loginUser(response.data));
        setIsEditMode(false);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="contenedor">
        <div className="text-center" style={{ marginTop: "20px" }}>
          <h2>Hola {user.name}!</h2>
          {user.isAdmin ? (
            <h3 style={{ marginTop: "20px" }}>Perfil de Administrador</h3>
          ) : (
            <h3>Perfil de usuario</h3>
          )}
        </div>
      </div>

      <div className="container" style={{ width: "30%" }}>
        <div style={{ marginTop: "20px" }}>
          {!isEditMode ? (
            <>
              <div style={{ marginTop: "20px" }}></div>
              <h5>Nombre: {user.name}</h5>
              <br></br>
              <h5>Apellido: {user.lastName}</h5>
              <br></br>
              <h5>Dirección: {user.address}</h5>
              <br></br>
              <br></br>
              <Link to={"/cart"}>
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ marginRight: "10px" }}
                >
                  Ver carrito
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginRight: "10px" }}
                onClick={handleEditClick}
              >
                Editar
              </button>
              <Link to={"/"}>
                <button type="button" className="btn btn-success">
                  Volver al Inicio
                </button>
              </Link>
            </>
          ) : (
            <>
              <h2>Editar tus datos</h2>
              <br></br>
              <label for="name" class="form-label">
                Nombre:
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                value={editedUser.name || ""}
                onChange={handleInputChange}
                placeholder="Nombre"
              />
              <label for="name" class="form-label">
                Apellido:
              </label>
              <input
                type="text"
                name="lastName"
                class="form-control"
                value={editedUser.lastName || ""}
                onChange={handleInputChange}
                placeholder="Apellido"
              />
              <label for="adress" class="form-label">
                Direccion:
              </label>
              <input
                type="text"
                name="address"
                class="form-control"
                value={editedUser.address || ""}
                onChange={handleInputChange}
                placeholder="Dirección"
              />

              <br></br>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSaveClick}
                style={{ marginRight: "10px" }}
              >
                Guardar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleBackClick}
              >
                Volver
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
