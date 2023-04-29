import { useState } from "react";
import { createMessage } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function CreateMessage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [message, setMessage] = useState("");
  const { token } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createMessage(postId, token, message);
      setMessage(response);
      navigate("/my-profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="messagePost-content">

            <h1 className="messageFormTitle">Hello Stranger!</h1>

            <form className="messagePost-form" onSubmit={handleSubmit}>
                <label>Content:</label>
                <textarea
                    type="text"
                    style={{marginBottom:"5px", height: "150px", padding:"10px"}}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br></br>
                <button type="submit">Send Message</button>
            </form>
        </div>
  );
}