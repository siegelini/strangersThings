import React, { useState } from "react";
import { registerUser } from "../api";

export default function RegisterForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("result of Registering User", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token)
    } catch (error) {
      console.log("Error for Registering User: ", error);
    }
    console.log({ username, password });
  }

  return (
    <div>
      <h1>Register</h1>
      <h4>Putting in users info</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
