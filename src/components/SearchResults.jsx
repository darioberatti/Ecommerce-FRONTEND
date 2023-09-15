import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Grid from "./Grid";

const SearchResults = () => {
  const searchName = useLocation().search;
  const [searchResults, setSearchResults] = useState([]);

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
  );
};

export default SearchResults;
