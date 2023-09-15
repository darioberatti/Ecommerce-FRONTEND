import axios from "axios";
import Grid from "../commons/Grid";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Categories = () => {
  const urlCategory = useLocation().pathname;
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api${urlCategory}`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [urlCategory]);

  useEffect(() => {
    if (category) {
      axios
        .get(`/api/products/category/${category.id}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [category]);

  return (
    <>
      <Grid
        items={products}
        title={category ? category.type : "No se encontró la categoría"}
      />
    </>
  );
};

export default Categories;
