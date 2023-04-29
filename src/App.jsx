import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import MyProfile from "./components/MyProfile";
import AllPost from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import CreateMessage from "./components/CreateMessage";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import AllPosts from "./components/AllPosts";

function App() {
  const { token, setToken, user } = useAuth();
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState("");

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

          {token && (
            <Link style={{ color: "gold" }} to="/my-profile">
              My Profile
            </Link>
          )}

          <Link style={{ color: "aquamarine" }} to="/all-posts">
            View Posts
          </Link>

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
        <div>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/all-posts"
          element={<AllPosts searchParam={searchParam} />}
        />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/register-user" element={<RegisterForm />} />
        <Route path="/Message/:postId" element={<CreateMessage />} />
      </Routes>
    </div>
  );
}

export default App;
