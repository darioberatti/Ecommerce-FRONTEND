import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import Register from "./commons/Register";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm"; // Crea un componente LoginForm


function App() {
     const [products, setProducts ] = useState([])
   
   useEffect(()=>{
    axios.get("http://localhost:3001/api/products")
      .then((response)=> setProducts(response.data))
  }, []) 

   

  return (
    <div>
     <Navbar />
       <Grid items={products}/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </div>
  );
};

export default App;
