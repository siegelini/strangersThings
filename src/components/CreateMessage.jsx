import React, { useState } from "react";
import { createMessage } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function CreateMessage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [message, setmessage] = useState("");
  const { token } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createMessage(postId, token, message);
      console.log(result);
      navigate("/my-profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a new message</h2>
      <form classname="createMessage-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(event) => setmessage(event.target.value)}
          />
        </div>
        <button type="submit">Create Message</button>
      </form>
    </div>
  );
}

export default CreateMessage;
