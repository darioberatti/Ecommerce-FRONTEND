import React, { useState } from "react";
import "../index.css";
import Card from "../commons/Card";
import axios from "axios";


const ProductForm = () => {
  const [urlImg, setUrlImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [team, setTeam] = useState("");
  const [year, setYear] = useState("");
  const [categoryId, setCategoryId] = useState("");


  const sizesArray = () => {
    const size = sizes.split(",");
    const allSizes = size.map((el) => {
      return el.replace(el.toLowerCase(), el.toUpperCase());
    });
    return allSizes
  };

  const urlsArray = () => {
    const images = urlImg.split(",");
    return images;
  };
  
  const productInfo = {
    urlImg: urlsArray(),
    name,
    description,
    size: sizesArray(),
    price,
    country,
    team,
    year,
    categoryId
  };

  const onSubmitCreate = (e) => {
    e.preventDefault()
    axios.post("/api/products/create", productInfo)
      .then(()=> {
        alert("Producto creado")
      }).catch((err)=>{
        console.error(err)
        alert("Ha ocurrido un problema. No se pudo crear el producto")
      })
  }

  return (
    <div
      className="create-product-container"
      style={{ border: "1px solid black" }}
    >
      <div class="contenedor-crear-producto">
        <form onSubmit={onSubmitCreate}>
          <div>
            <label for="urlImg" class="form-label mt-3">
              URL de la IMAGEN:
            </label>
            <input
              type="text"
              id="urlImg"
              class="form-control"
              placeholder="Ej: http://url_img/img.jpg"
              onChange={(e) => setUrlImg(e.target.value)}
            />
            <small class="mb-3">
              <strong>SEPARAR CON COMAS CADA URL</strong>
            </small>
          </div>

          <label for="title" class="form-label mt-2">
            Titulo:
          </label>
          <input
            type="text"
            id="title"
            class="form-control mb-3"
            placeholder="Ej: Camiseta de River del 86"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label for="description" class="form-label mt-2">
            Descripcion:
          </label>
          <input
            type="text"
            id="description"
            class="form-control mb-3"
            placeholder="Ej: Camiseta que uso ... en el año 1986 para la copa ..."
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label for="country" class="form-label mt-2">
            Pais:
          </label>
          <input
            type="text"
            id="country"
            class="form-control mb-3"
            placeholder="Ej: Argentina"
            onChange={(e) => setCountry(e.target.value)}
            required
          />

          <label for="team" class="form-label mt-2">
            Equipo:
          </label>
          <input
            type="text"
            id="team"
            class="form-control mb-3"
            placeholder="Ej: Argentina"
            onChange={(e) => setTeam(e.target.value)}
            required
          />

          <label for="year" class="form-label mt-2">
            Año:
          </label>
          <input
            type="text"
            id="year"
            class="form-control mb-3"
            placeholder="Ej: Argentina"
            onChange={(e) => setYear(e.target.value)}
            required
          />

          <label for="categoryId" class="form-label mt-2">
            Id de la Categoria:
          </label>
          <input
            type="text"
            id="categoryId"
            class="form-control mb-3"
            placeholder="Ej: Argentina"
            onChange={(e) => setCategoryId(e.target.value)}
            required
          />

          <div>
            <label for="sizes" class="form-label mt-2">
              Talles:
            </label>
            <input
              type="text"
              id="sizes"
              class="form-control"
              placeholder="Ej: XS, S, M, L, XL"
              onChange={(e) => setSizes(e.target.value)}
              required
            />
            <small class="mb-3">
              <strong>SEPARAR CON COMAS CADA TALLE</strong>
            </small>
          </div>

          <label for="price" class="form-label mt-2">
            Precio:
          </label>
          <input
            type="number"
            id="price"
            class="form-control mb-3"
            placeholder="Ej: 200"
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type="submit" class="btn btn-dark mb-5">
           Agregar Producto
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
