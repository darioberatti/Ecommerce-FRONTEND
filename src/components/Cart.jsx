import React from "react";
import "../index.css";
import { fakeData } from "../utils/fakeData";
import { Link } from "react-router-dom";
/* class="list-group-item list-group-item-action active"
 */
console.log(fakeData);

const Cart = () => {
  return (
    <div className="carrito">
      <div class="list-group">
        {fakeData.map((item) => (
           <div style={{borderBottom: "1px solid white"}}>
          <Link to={""} class="list-group-item list-group-item-action active" >
            <div class="d-flex w-100 justify-content-between" >
              <h5 class="mb-1">{item.name}</h5>
              <small>{item.price}</small>
            </div>
            <p class="mb-1">{item.description}</p>
            <small >And some small print.</small>
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
