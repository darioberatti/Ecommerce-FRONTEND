import axios from "axios";
import Grid from "../commons/Grid";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Categories = () => {
  const urlCategory = useLocation().pathname;
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
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
      <div>
        <button type="button" class="btn btn-link" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

      <Grid
        items={products}
        title={category ? category.type : "No se encontró la categoría"}
      />
    </>
  );
};

export default Categories;
