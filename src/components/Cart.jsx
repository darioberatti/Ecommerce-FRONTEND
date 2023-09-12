import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="carrito">
      <div class="list-group">
        {cartItems?.map((item) => (
          <div style={{ borderBottom: "1px solid white" }}>
            <Link
              to={`/products/${item.product.id}`}
              class="list-group-item list-group-item-action active"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{item.product.name}</h5>
                <p>${item.product.price}</p>
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteFromCart(item))}
                >
                  Eliminar
                </button>
              </div>
              <p class="mb-1">{item.product.description}</p>
              <small>And some small print.</small>
            </Link>
          </div>
        ))}
      </div>
      <button type="button" class="btn btn-dark">
        Ir a Pagar
      </button>
    </div>
  );
};

export default Cart;
