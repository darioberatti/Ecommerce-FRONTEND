import React, { useEffect, useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const navigate = useNavigate();

  const axiosData = async () => {
    try {
      const response = await axios.get("/api/cart");
      response["data"]["items"].sort((a, b) => a["id"] - b["id"]);
      setTotalPrice(response.data.cart.total);
      setCartItems(response.data.items);
    } catch (error) {
      toast.error("Primero debes agregar productos a tu carrito");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  useEffect(() => {
    axiosData();
  }, []);

  const handleDeleteFromCart = async (id) => {
    await axios.delete(`/api/cart/${id}`);
    axiosData();
  };

  const handleAddToCart = async (id) => {
    await axios.post(`/api/cart/${id}`);
    axiosData();
  };

  return (
    <div className="carrito">
      <Toaster richColors position="top-center" />
      <div className="list-group">
        {cartItems?.map((item, i) => (
          <div style={{ borderBottom: "1px solid white" }} key={i}>
            <div className="list-group-item list-group-item-action active">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                  {item.name.length > 25
                    ? item.name.slice(0, 25) + "..."
                    : item.name}
                </h5>
                <p>${item.price}</p>
                <button
                  type="button"
                  className="btn btn-light btn-sm"
                  onClick={() => {
                    handleAddToCart(item.id);
                  }}
                >
                  ➕
                </button>
              </div>
              <p className="mb-1">
                {item.description.length > 50
                  ? item.description.slice(0, 50) + "..."
                  : item.description}
              </p>
              <small>Cantidad: {item.cart_products.quantity}</small>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "10px 0px 10px 0px",
                }}
              >
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    handleDeleteFromCart(item.id);
                  }}
                >
                  ➖
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="contenedor-pagar">
        <h1>El total a pagar por tus productos es de:</h1>
        <h1 style={{ marginTop: "10%" }}>${totalPrice}</h1>

        {cartItems.length ? (
          <Link to={"/checkout"}>
            <button
              type="button"
              className="btn btn-dark"
              style={{ marginTop: "10%" }}
            >
              Ir a Pagar
            </button>
          </Link>
        ) : (
          <div>
            <button
              type="button"
              className="btn btn-dark"
              style={{ marginTop: "10%" }}
              disabled
            >
              Ir a Pagar
            </button>
            <p className="mt-3">Primero debes agregar productos al carrito.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
