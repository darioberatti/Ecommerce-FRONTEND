import { Route, Routes } from "react-router";
import "./App.css";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
     const [products, setProducts ] = useState([])
   
   useEffect(()=>{
    axios.get("http://localhost:3001/api/products")
      .then((response)=> setProducts(response.data))
  }, []) 

   

  return (
    <div>
      <Grid items={products}/>
    </div>
  );
}

export default App;
