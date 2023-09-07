import { Route, Routes } from "react-router";
import "./App.css";
import Register from "./commons/Register";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
     <Navbar />
      <h1>HOLA</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
