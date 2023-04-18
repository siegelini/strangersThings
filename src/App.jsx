import { useState } from "react";
// import {Routes, Route} from "react-router-dom"; when routes are established
import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [token, setToken] = useState(null);

  console.log("Token from App.jsx", token);
  return (
    <div className="App">
      <h1>Stranger's Things!</h1>
      Register Form setToken={setToken}
    </div>
  );
}

export default App;
