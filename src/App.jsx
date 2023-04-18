import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Nav from "./components/nav";

function App() {
  const [token, setToken] = useState(null);

  console.log("Token from App.jsx", token);
  return (
    <div className="App">
      <h1>Stranger's Things!</h1>
      <Nav />
      <Routes>
        <Route path="register" element={<RegisterForm setToken={setToken} />} />
      </Routes>
      Register Form setToken={setToken}
    </div>
  );
}

export default App;
