import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateSetter } from "../utils/utils";

const History = () => {
  const [history, setHistory] = useState([]);
  const user = useSelector((state) => state.user.value);
  // const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    axios
      .get(`/api/cart/${user.id}/history`)
      .then((response) => setHistory(response.data))
      .catch((err) => console.log(err));
  }, [user]);

  const productGetter = (id) => {
    axios
      .get(`/api/cart/${id}`)
      .then((result) => result.data)
      .then((data) => {
        console.log("productos-->", data);

        // data.map(item=>{
        //  return <li> {item.name} </li>
        // })
      })
      .catch((err) => console.log(err));
  };

  console.log("usuario-->", user);
  console.log("history-->", history);
  console.log("user-->", user);
  console.log("user id-->", user.id);

  // console.log("cartProducts-->", cartProducts);

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
                  <ul>{productGetter(cart.id)}</ul>
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
