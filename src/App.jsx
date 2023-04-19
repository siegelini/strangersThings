import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import AllPost from "./components/AllPosts";

function App() {
  const [token, setToken] = useState(null);

  console.log("Token from App.jsx", token);
  return (
    <div className="App">
      <h1>Stranger's Things</h1>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/allposts">All Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterForm setToken={setToken} />} />
        <Route path="allposts" element={<AllPost />} />
      </Routes>
    </div>
  );
}

export default App;
