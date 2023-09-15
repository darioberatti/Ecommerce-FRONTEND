import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { sizeSetter } from "../utils/utils";
import { Toaster, toast } from "sonner";

const Content = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const usuario = useSelector((state) => state.user.value);

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = () => {
    axios
      .post(`/api/cart/${product.id}`)

      .then((res) => {
        toast.success(res.data.message);
      })
      .catch(() => {
        toast.error("No se registró un usuario logueado");
        navigate("/login");
      });
  };

  const handleDeleteProduct = () => {
    axios
      .delete(`/api/products/admin/${id}`)
      .then(() => {
        toast.success("Producto eliminado correctamente");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })

      .catch((err) => {
        console.error(err);
        toast.error(
          "Ha ocurrido un problema. El producto no pudo ser eliminado. Intentelo de nuevo."
        );
      });
  };

  return (
    <div>
      <div style={{marginLeft:"8%"}}><button type="button" class="btn btn-link" onClick={()=>navigate(-1)}>Volver</button></div>
      <Toaster richColors position="top-center" />
      <div style={{ margin: "2% 8%" }}>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card" style={{ width: "80%" }}>
              <div className="card-body">
                <div
                  id="carouselExampleIndicators"
                  className="carousel carousel-dark slide"
                >
                  <div className="carousel-inners"></div>
                  <div className="carousel-inner">
                    {product.urlImg?.map((img, i) => {
                      return (
                        <div className="carousel-item active" key={i}>
                          <img src={img} className="d-block w-100" alt="..." />
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body" style={{ lineHeight: "2.5" }}>
                <h2 class="card-title" style={{ lineHeight: "inherit" }}>
                  {product.name}
                </h2>
                <h1 class="card-title" style={{ lineHeight: "inherit" }}> {product.price}$</h1>
                <h5 class="card-text" style={{ lineHeight: "1.8" }}>Equipo: {product.team}</h5>
                <h5 class="card-text" style={{ lineHeight: "1.8" }}>País: {product.country}</h5>
                <h5 class="card-text" style={{ lineHeight: "1.8" }}>Año: {product.year}</h5>

                <h5 class="card-text" style={{ lineHeight: "1.8" }}> 
                  Talle: {product.size && sizeSetter(product.size)}
                </h5>
                <h5 class="card-text" style={{ lineHeight: "1.8" }}>Stock disponible: {product.stock}</h5>
                <h5 class="card-text" style={{ lineHeight: "1.8" }}>{product.description}</h5>

                <div className="d-grid gap-2">
                  {usuario.isAdmin ? (
                    <div className="container-buttons">
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={handleDeleteProduct}
                      >
                        Eliminar Producto
                      </button>
                      <button
                        className="btn btn-warning"
                        type="button"
                        onClick={() => navigate(`/edit-product/${id}`)}
                      >
                        Editar Producto
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      handleAddToCart();
                    }}
                    disabled={product.stock === "0"}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
