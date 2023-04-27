import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AllPost from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import MyProfile from "./components/MyProfile";
import useAuth from "./hooks/useAuth";

function App() {
  const { token, setToken, user } = useAuth();
  const navigate = useNavigate();

  console.log("Token from App.jsx", token);

  return (
    <div className="App">
      <header className="navigation">
        <h1>
          Welcome to Stranger's Things {token ? <p>{user.username}</p> : null}
        </h1>
        <h3 className="navLinks">
          <Link style={{ color: "red" }} to="/">
            Login
          </Link>

          <Link style={{ color: "gold" }} to="/all-posts">
            View Posts
          </Link>

          {token && (
            <Link style={{ color: "aquamarine" }} to="/my-profile">
              My Profile
            </Link>
          )}

          {token && (
            <Link style={{ color: "deepskyblue" }} to="/create-post">
              Create Post
            </Link>
          )}

          {token && (
            <button
              className="LogOut-Btn"
              onClick={() => {
                setToken(null);
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Log Out
            </button>
          )}
        </h3>
      </header>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/all-posts" element={<AllPost />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/register-user" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
