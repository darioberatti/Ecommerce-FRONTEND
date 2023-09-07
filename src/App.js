import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import Register from "./commons/Register";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm"; // Crea un componente LoginForm
import AuthContextProvider, { authContext } from "./context/authContext";

function App() {
  const [products, setProducts] = useState([]);

  const userContext = useContext(authContext);

  useEffect(() => {
    // axios.get("http://localhost:3001/api/users/me")
    // .then(user=>userContext.user=(user.data.user))
    // .catch(err=> console.error(err))

    axios
      .get("http://localhost:3001/api/products")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <AuthContextProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Grid items={products} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
