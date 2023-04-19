import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import AllPost from "./components/AllPosts";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  console.log("Token from App.jsx", token);
  return (
    <div className="App">
      <h1>Welcome to Stranger's Things</h1>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/allposts">All Posts</Link>
        <Link to="/CreatePost">Create a Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterForm setToken={setToken} />} />
        <Route path="allposts" element={<AllPost />} />
        {/* /* <Route path="createposts" element={<createPost />} /> */}
      </Routes>
    </div>
  );
}

export default App;
