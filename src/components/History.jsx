import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HistoryItem from "../commons/HistoryItem";
import { Link } from "react-router-dom";

const History = () => {
  const [history, setHistory] = useState([]);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    axios
      .get(`/api/users/${user.id}/history`)
      .then((response) => setHistory(response.data))
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div style={{ textAlign: "center", margin: "2%" }}>
      <h1>Tu historal de compras</h1>

      <div className="table-history">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Productos</th>
              <th scope="col">Precio Total</th>
            </tr>
          </thead>
          <tbody>
            {history?.map((cart, i) => {
              return <HistoryItem cart={cart} i={i} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="contenedor">
        <Link to={"/"}>
          <button type="button" className="btn btn-dark">
            Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default History;
