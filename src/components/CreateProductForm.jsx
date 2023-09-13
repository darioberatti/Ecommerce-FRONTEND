import React, { useEffect, useState } from "react";
import "../index.css";
import Card from "../commons/Card";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router";
import { onSubmitReload } from "../utils/utils";

const initialProductInfo = {
  urlImg: "",
  name: "",
  description: "",
  size: "",
  country: "",
  team: "",
  year: "",
  categoryId: "",
  price: "",
};

const ProductForm = () => {
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState(initialProductInfo);
  // useParams
  const { id } = useParams();
  let { pathname } = useLocation();
  const path = "/" + pathname.split("/")[1];
  const [productToEdit, setEditToProduct] = useState({});

  useEffect(() => {
    if (path === "/edit-product") {
      axios.get(`/api/products/${id}`).then((res) => {
        setProductInfo(res.data);
      });
    } else {
      setProductInfo(initialProductInfo);
    }
  }, [path, id]);

  const sizesArray = (value) => {
    const sizes = value.split(",");
    const sizesToUppercase = sizes.map((el) => el.toUpperCase().trim());
    return sizesToUppercase;
  };

  const urlsArray = (value) => {
    const images = value.split(",");
    const imagesTrimmed = images.map((el) => el.trim());
    return imagesTrimmed;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "size") {
      const sizesArrayValue = sizesArray(value);
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        [name]: sizesArrayValue,
      }));
    } else if (name === "urlImg") {
      const urlsArrayValue = urlsArray(value);
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        [name]: urlsArrayValue,
      }));
    } else {
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (path === "/edit-product") {
      axios
        .put(`/api/products/admin/${id}`, productInfo)
        .then((res) => {
          alert("Cambios hechos correctamente");
          console.log(res.data);
          navigate("/")
          /*            onSubmitReload();
           */
        })
        .catch((err) => {
          console.error(err);
          alert("Algo salió mal, intentalo de nuevo");
        });
    } else {
      axios
        .post("/api/products/create", productInfo)
        .then((res) => {
          setEditToProduct(res.data);
          alert("Producto creado");
                    navigate("/");
          
          /*          onSubmitReload();
           */
        })
        .catch((err) => {
          console.error(err);
          alert("Ha ocurrido un problema. No se pudo crear el producto");
        });
    }
  };
  
  return (
    <div
      className="create-product-container"
      style={{ border: "1px solid black" }}
    >
      <div className="contenedor-crear-producto">
        <form onSubmit={handleSubmit}>
          {Object.keys(initialProductInfo).map((key, i) => (
            <div key={i}>
              <label for={key} className="form-label mt-2">
                {key === "size"
                  ? "Talles:"
                  : key === "urlImg"
                  ? "Url de Imagenes:"
                  : key === "price"
                  ? "Precio:"
                  : key === "name"
                  ? "Titulo:"
                  : key === "description"
                  ? "Descripcion:"
                  : key === "team"
                  ? "Equipo:"
                  : key === "country"
                  ? "Pais:"
                  : key === "year"
                  ? "Año:"
                  : key === "categoryId"
                  ? "ID de la categoria:"
                  : ""}
              </label>
              {path !== "/create-product" ? (
                key === "urlImg" ? (
                  <textarea name={key} className="form-control mb-3" placeholder="http://urlimagen/img.jpg,http://urlimagen/img2.jpg" id={key} cols="30" rows="5" onChange={handleInputChange} value={productInfo[key]} required></textarea>
                ) : (
                  <input
                  type={
                    key === "price"
                      ? "number"
                      : key === "year"
                      ? "number"
                      : "text"
                  }
                  id={key}
                  name={key}
                  className="form-control mb-3"
                  placeholder={`Ej: ${
                    key === "size"
                      ? "XS, S, M, L, XL"
                      : key === "price"
                      ? "2500"
                      : key === "name"
                      ? "Camiseta de la Seleccion Brasilera"
                      : key === "description"
                      ? "La camiseta que se uso para el mundial 2002, sin duda una de las mas iconicas"
                      : key === "team"
                      ? "Seleccion Brasilera de Futbol"
                      : key === "country"
                      ? "Brasil"
                      : key === "year"
                      ? "2002"
                      : key === "categoryId"
                      ? "2"
                      : ""
                  }`}
                  value={productInfo[key]}
                  onChange={handleInputChange}
                />
                )
              ) : (
                key === "urlImg" ? (
                  <textarea name={key} className="form-control mb-3" placeholder="http://urlimagen/img.jpg,http://urlimagen/img2.jpg" id={key} cols="30" rows="5" onChange={handleInputChange} value={productInfo[key]} required></textarea>
                ) : (
                  <input
                  type={
                    key === "price"
                      ? "number"
                      : key === "year"
                      ? "number"
                      : "text"
                  }
                  id={key}
                  name={key}
                  className="form-control mb-3"
                  placeholder={`Ej: ${
                    key === "size"
                      ? "XS, S, M, L, XL"
                      : key === "price"
                      ? "2500"
                      : key === "name"
                      ? "Camiseta de la Seleccion Brasilera"
                      : key === "description"
                      ? "La camiseta que se uso para el mundial 2002, sin duda una de las mas iconicas"
                      : key === "team"
                      ? "Seleccion Brasilera de Futbol"
                      : key === "country"
                      ? "Brasil"
                      : key === "year"
                      ? "2002"
                      : key === "categoryId"
                      ? "2"
                      : ""
                  }`}
                  value={productInfo[key]}
                  onChange={handleInputChange}
                  required
                />
                )
              )}
              {key === "size" ? (
                <small>
                  <strong>SEPARAR CADA TALLE CON COMAS</strong>
                </small>
              ) : key === "urlImg" ? (
                <small>
                  <strong>SEPARAR CADA URL CON COMAS</strong>
                </small>
              ) : (
                ""
              )}
            </div>
          ))}
          <button type="submit" className="btn btn-dark mb-5">
            {path === "/edit-product"
              ? "Actualizar Producto"
              : "Agregar producto"}
          </button>
        </form>
      </div>
      <div>
        <Card item={productInfo} />
      </div>
    </div>
  );
};

export default ProductForm;
