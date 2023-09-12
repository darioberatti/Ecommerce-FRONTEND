import React, { useEffect, useState } from "react";
import "../index.css";
import { fakeData } from "../utils/fakeData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/cart";
import axios from "axios";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const navigate = useNavigate();
  const [cartId, setCartId] = useState("");

  useEffect(() => {
    axios
      .get("/api/cart")
      .then((response) => {
        setTotalPrice(response.data.cart.total);
        setCartItems(response.data.items);
        setCartId(response.data.cart.id);
      })
      .catch(() => {
        navigate("/");
        alert("Primero debes agregar productos a tu carrito");
      });
  }, []);
  console.log(totalPrice);

  const handleDeleteFromCart = (id) => {
    axios.delete(`/api/cart/${id}`).then((res) => console.log(res.data));
  };

  const handleAddToCart = (id) => {
    axios.post(`/api/cart/${id}`).then((res) => console.log(res.data));
  };

  const handleCheckout = () => {
    axios
      .put(`/api/cart/${cartId}`, { completed: true })
      .then((res) => console.log(res.data));
  };

  console.log("cartId-->", cartId);
  return (
    <div className="carrito">
      <div class="list-group">
        {cartItems?.map((item) => (
          <div style={{ borderBottom: "1px solid white" }}>
            <div class="list-group-item list-group-item-action active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{item.name}</h5>
                <p>${item.price}</p>
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  /* onClick={() => dispatch(deleteFromCart(item))} */
                  onClick={() => handleAddToCart(item.id)}
                >
                  ➕
                </button>
              </div>
              <p class="mb-1">{item.description}</p>
              <small>Cantidad: {item.cart_products.quantity}</small>
              {/* <Link to={`/products/${item.id}`}> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "10px 0px 10px 0px",
                }}
              >
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  /* onClick={() => dispatch(deleteFromCart(item))} */
                  onClick={() => handleDeleteFromCart(item.id)}
                >
                  ➖
                </button>
              </div>
              {/*                </Link>
               */}{" "}
            </div>
          </div>
        ))}
      </div>
      <div class="contenedor-pagar">
        <h1>El total a pagar por tus productos es de:</h1>
        <h1 style={{ marginTop: "10%" }}>${totalPrice}</h1>
        <button
          type="button"
          class="btn btn-dark"
          style={{ marginTop: "10%" }}
          onClick={() => handleCheckout()}
        >
          Ir a Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
