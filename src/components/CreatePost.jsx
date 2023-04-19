import React, { useState } from "react";
import { createPost } from "../api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const payload = { title, description, price };
    try {
      createPost(payload);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="createPost-content">
      {status === "success" && <p>Post created successfully!</p>}
      {status === "error" && <p>There was an error creating the post.</p>}

      <h1 className="greeting">Hello Stranger</h1>

      <form className="createPost-form" onSubmit={handleSubmit}>
        <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        <label>Description:</label>
          <textarea
            style={{marginBottom:"5px"}}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <br></br>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
