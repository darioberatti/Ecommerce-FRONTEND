import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Profile = () => {
  const userId = useSelector((state) => state.user.value.id);
  const [user, setUser] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    axios
      .get(`/api/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

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
      .put(`/api/users/${userId}`, editedUser)
      .then((response) => {
        toast.success("El usuario ha sido editado correctamente");
        setUser(response.data);
        setIsEditMode(false);
      })
      .catch((error) => {
        toast.error("No se pudo actualizar los datos");
      });
  };

  return (
    <>
      <div className="contenedor">
        <Toaster richColors position="top-center" />
        <div className="text-center" style={{ marginTop: "20px" }}>
          <h2>Hola {user.name}!</h2>
          {user.isAdmin ? (
            <h3 style={{ marginTop: "20px" }}>Perfil de Administrador</h3>
          ) : (
            <h3>Perfil de usuario</h3>
          )}
        </div>
      </div>

      <div className="container text-center" style={{ width: "30%" }}>
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
              <h5>Nombre de usuario: {user.userName}</h5>
              <br></br>
              <h5>Si querés ver tu carrito hacé click aquí: </h5>
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
              <br></br>
              <br></br>

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

              <label for="adress" class="form-label">
                Nombre de usuario:
              </label>
              <input
                type="text"
                name="userName"
                class="form-control"
                value={editedUser.userName || ""}
                onChange={handleInputChange}
                placeholder="Usuario"
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
