import React from "react";
import "../index.css";
import { Link, useLocation } from "react-router-dom";

const Card = ({ item }) => {
  const { pathname } = useLocation();
  const path = "/" + pathname.split("/")[1];

  return (path === "/create-product" && item) ||
    (path === "/edit-product" && item.urlImg) ? (
    <div
      className="card"
      style={{
        width: "26rem",
        borderRadius: "5px 5px 21px 21px",
        height: "40rem",
      }}
    >
      <img
        src={
          !item.urlImg[0]
            ? "https://www.fruve.sectechfield.com//media/productImages/imagen-no-disponible.png"
            : item.urlImg[0]
        }
        className="card-img-top"
        alt="..."
        width={350}
        height={350}
      />
      <div
        className="card-body mt-2"
        style={{ border: "1px solid grey", borderRadius: 20 }}
      >
        <h5 className="card-title">
          {item.name.length > 60 ? item.name.slice(0, 60) + "..." : item.name}
        </h5>
        <p className="card-text">
          {item.description.length > 160
            ? item.description.slice(0, 160) + "..."
            : item.description}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            width: "85%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            to={`/products/${item.id}`}
            className="btn btn-primary"
            type="submit"
            disabled
          >
            Ver más
          </button>
          <span className="span">${item.price}</span>
        </div>
      </div>
    </div>
  ) : item.urlImg ? (
    <div
      className="card"
      style={{
        width: "18rem",
        borderRadius: "5px 5px 21px 21px",
        height: "32rem",
      }}
    >
      <img
        src={
          !item.urlImg[0]
            ? "https://www.fruve.sectechfield.com//media/productImages/imagen-no-disponible.png"
            : item.urlImg[0]
        }
        className="card-img-top"
        alt="..."
        width={250}
        height={250}
      />
      <div
        className="card-body mt-2"
        style={{ border: "1px solid grey", borderRadius: 20 }}
      >
        <h5 className="card-title">
          {item.name.length > 33 ? item.name.slice(0, 33) + "..." : item.name}
        </h5>
        <p className="card-text">
          {item.description.length > 75
            ? item.description.slice(0, 74) + "..."
            : item.description}
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            to={`/products/${item.id}`}
            className="btn btn-primary"
            type="submit"
          >
            Ver más
          </Link>
          <span className="span">${item.price}</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Card;
