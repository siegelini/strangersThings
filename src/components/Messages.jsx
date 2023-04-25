import { useEffect, useState } from "react";
import { fetchMessages, createMessage } from "../api";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    async function getMessages() {
      const messages = await fetchMessages();
      setMessages(messages);
    }
    getMessages();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const message = await createMessage(newMessage);
    setMessages([...messages, message]);
    setNewMessage("");
  }

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
