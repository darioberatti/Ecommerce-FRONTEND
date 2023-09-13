import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import { dateSetter } from "../utils/utils";

const HistoryItem = ({ cart, i }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/cart/${cart.id}`)
      .then((result) => result.data)
      .then((data) => {
        setCartProducts(data);
      })
      .catch((err) => console.log(err));
  }, [cart]);

  console.log(cartProducts);
  // const productGetter = (id) => {
  //   // let productList = ""
  //   axios
  //     .get(`/api/cart/${id}`)
  //     .then((result) => result.data)
  //     .then((data) => {
  //       console.log("productos-->", data);

  //       // for(let i=0;i<data.length;i++){
  //       //   console.log("DATA.Name-->", data[i].name);
  //       //   productList +=(`<li>${data[i].name}</li>`)
  //       // }
  //       // return productList
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <tr>
      <th scope="row">{i + 1}</th>
      <td>{dateSetter(cart.createdAt)}</td>
      <td>
        <ul>
          {cartProducts?.map((item) => {
            return <li style={{width:"50%", margin: "0 auto"}}>{item.name} (x{item.cart_products.quantity})</li>;
          })}
        </ul>
      </td>
      <td>${cart.total}</td>
    </tr>
  );
};

export default HistoryItem;
