import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateSetter } from "../utils/utils";
import HistoryItem from "../commons/HistoryItem";

const History = () => {
  const [history, setHistory] = useState([]);
  const user = useSelector((state) => state.user.value);
  // const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    axios
      .get(`/api/users/${user.id}/history`)
      .then((response) => setHistory(response.data))
      .catch((err) => console.log(err));
  }, [user]);

  

  console.log("usuario-->", user);
  console.log("history-->", history);
  console.log("user-->", user);
  console.log("user id-->", user.id);


  return (
    <div className="table-history">
      <table class="table">
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
            return <HistoryItem cart={cart} i={i}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
