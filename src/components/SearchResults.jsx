import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Grid from "../commons/Grid";


const SearchResults = () => {
  const searchName = useLocation().search;
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`/api/products/search${searchName}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [searchName]);

  return (
    <>
    <div>
        <button type="button" class="btn btn-link" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    <div className="contenedor-grid" style={{ margin: "0 8%" }}>
      {searchResults.length === 0 ? (
        <h1>La búsqueda no arrojó ningún resultado</h1>
      ) : (
        <>
          <h1>Resultados de la búsqueda</h1>
          <Grid items={searchResults} />
        </>
      )}
    </div>
    </>

  );
};

export default SearchResults;
