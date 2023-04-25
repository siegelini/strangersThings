import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Logout from "./components/LogOut";
import AllPost from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import { deletePost, updatePost } from "./api";
// import { useAuth } from "./Hooks/UseAuth";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log("Token from App.jsx", token);

  return (
    <div className="App">
      <header className="navigation">
        <h1>Welcome to Stranger's Things</h1>
        <h3 className="navLinks">
          <Link style={{ color: "red" }} to="/">
            Login
          </Link>
          <Link style={{ color: "gold" }} to="/all-posts">
            View Posts
          </Link>
          {token && <Link style={{ color: "aquamarine" }}>Message Board</Link>}
          {token && (
            <Link style={{ color: "deepskyblue" }} to="/create-post">
              Create Post
            </Link>
          )}
          {token && (
            <Link style={{ color: "darkorchid" }} to="/logout">
              Log Out
            </Link>
          )}
        </h3>
      </header>
      <Routes>
        <Route path="/" element={<LoginForm setToken={setToken} />} />
        <Route path="/all-posts" element={<AllPost />} />
        <Route
          path="/create-post"
          element={
            <CreatePost
              token={token}
              onPostDelete={(postId) => {
                deletePost;
              }}
              onPostUpdate={(updatedPost) => {
                updatePost;
              }}
            />
          }
        />
        <Route
          path="/register-user"
          element={<RegisterForm setToken={setToken} />}
        />
        <Route path="/logout" element={<Logout setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
