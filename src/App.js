import { Route, Routes } from "react-router";
import "./App.css";
import Register from "./commons/Register";

function App() {
  return (
    <div>
      <h1>HOLA</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
