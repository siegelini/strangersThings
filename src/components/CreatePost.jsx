import React, { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";
import { deletePost, updatePost } from "../api";

export default function CreatePost({
  token,
  post,
  onPostDelete,
  onPostUpdate,
}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isEditing, setIsEditing] = React.useState(false);

  const handleDeleteClick = async () => {
    await deletePost(post.id, token);
    onPostDelete(post.id);
  };

  const handleUpdateClick = async () => {
    const updatedPost = await updatePost(
      post.id,
      title,
      description,
      price,
      token
    );
    onPostUpdate(updatedPost);
    setIsEditing(false);
  };

  return (
    <div className="createPost-content">
      <h1 className="greeting">Hello Stranger</h1>
      {isEditing ? ( //to see if the editing has token/ will set to true if token...is the idea
        <form
          className="createPost-form"
          onSubmit={async (e) => {
            e.preventDefault();
            await createPost(title, description, price, token);
            navigate("/all-posts");
          }}
        >
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Description:</label>
          <textarea
            style={{ marginBottom: "5px", height: "150px" }}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          <br></br>
          <button type="submit">Create Post</button>
        </form>
      ) : (
        //using the question marks to have buttons show up for now.  cannot get it working yet
        <>
          <h3>{post?.title}</h3>
          <p>{post?.description}</p>
          <p>{post?.price}</p>
          {token && (
            <div>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
