import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { sizeSetter } from "../utils/utils";

const Content = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log("productId-->", id);
  console.log("product-->", product);
  console.log("imgs--->", product.urlImg);

  return (
    <div style={{ textAlign: "center" }} >
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <div
                id="carouselExampleIndicators"
                class="carousel carousel-dark slide"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div class="carousel-inner" style={{ maxWidth: "60%" }}>
                  <div class="carousel-item active">
                    <img
                      src="https://www.camisetasclubes.com/shop/images/Real-Madrid/HMOGSHZ24.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <div class="carousel-item active">
                    <img
                      src="https://www.camisetasclubes.com/shop/images/Real-Madrid/HMOGSHZ24_1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>

                  {/* <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div> */}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Anterior</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"> {product.name + " - " + product.team}</h4>
              <h3 class="card-title"> {product.price}$</h3>

              <p class="card-text">{product.description}</p>
              <p class="card-text">
                {/* Talles disponibles: {sizeSetter(product.size)} */}
              </p>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
