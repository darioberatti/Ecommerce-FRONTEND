import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", borderRadius: "5px 5px 21px 21px" }}
    >
      <img src={item.urlImg[0]} className="card-img-top" alt="..." />
      <div
        className="card-body"
        style={{ border: "1px solid grey", borderRadius: 20 }}
      >
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <Link to={`/products/${item.id}`}>
          <button class="btn btn-primary" type="submit">
            Ver más
          </button>
        </Link>

        <span className="span">${item.price}</span>
      </div>
    </div>
  );
};

export default Card;
