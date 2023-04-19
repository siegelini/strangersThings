import React, { useState } from "react";
import { createPost } from "../api";

export default function createPost() {
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
    <div>
      {status === "success" && <p>Post created successfully!</p>}
      {status === "error" && <p>There was an error creating the post.</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
