import React, { useState } from "react";
import { registerUser } from "../api";
// import useAuth from "../Hooks/UseAuth";

export default function RegisterForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const { setToken, user } = useAuth();
<<<<<<< HEAD
  // console.log("User from RegisterForm: ", user);
=======
>>>>>>> b3716dbc1c79df0d1dc17765f759731db062cd71

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("Result of Registering User", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.log("Error for Registering User: ", error);
    }
    console.log({ username, password });
  }

  return (
    <div className="user-content">
      <h1 className="title">Join Now!</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username Here"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          placeholder="Enter Password Here"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register New User</button>
      </form>
    </div>
  );
}
