import React from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import { loginUser } from "./redux/user";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content";
import Cart from "./components/Cart";
import SearchResults from "./components/SearchResults";
import History from "./components/History";
import Checkout from "./components/Checkout";
import ProductForm from "./components/CreateProductForm";
import EditCategories from "./components/EditCategories";
import Categories from "./components/Categories";
import Profile from "./components/Profile";

function App() {
  const [products, setProducts] = useState([]);
  const usuario = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const location = useLocation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", { withCredentials: true })
      .then((user) => {
        dispatch(loginUser(user.data.payload));
      })
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:3001/api/products")
      .then((response) => setProducts(response.data));
  }, [location.pathname]);

  useEffect(() => {
    axios
      .get(`/api/categories`)
      .then((result) => setCategories(result.data))
      .catch((err) => console.log(err));
  }, []);

  const isSearchResultsPage = location.pathname === "/search-results";

  return (
    <div className="bodyBackground">
      <Navbar categories={categories} />
      <Routes>
        <Route
          path="/"
          element={
            <Grid
              items={products}
              title={
                isSearchResultsPage
                  ? "Resultados de la búsqueda"
                  : "Todos nuestros productos"
              }
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<Content />} />
        <Route path="/create-product" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<ProductForm />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/categories/:type" element={<Categories />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/edit-categories"
          element={<EditCategories categories={categories} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
