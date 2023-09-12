import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateSetter } from "../utils/utils";

const History = () => {
  const [history, setHistory] = useState([]);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    axios
      .get(`/api/cart/${user.id}/history`)
      .then((response) => setHistory(response.data))
      .catch((err) => console.log(err));
  }, [user]);

  // const productGetter = (id) => {
  //   axios
  //     .get(`/api/cart/${id}`)
  //     .then((products) => products.data)
  //     .then((data) => {
  //       data.map((prod) => {prod.name});
  //     });
  // };

  console.log("usuario-->", user);
  console.log("history-->", history);

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
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{dateSetter(cart.createdAt)}</td>
                <td>
                  <ul>
                    <li>Product</li>
                    <li>Product</li>
                    <li>Product</li>
                  </ul>
                </td>
                <td>${cart.total}</td>
              </tr>
            );
          })}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
              <ul>
                <li>Camiseta - 2</li>
                <li>Camiseta - 1</li>
                <li>Camiseta - 1</li>
              </ul>
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default History;
