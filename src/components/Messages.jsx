// import { useEffect, useState } from "react";
// import { fetchMessages } from "../api";

// export default function Messages() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     async function getMessages() {
//       const messageList = await fetchMessages();
//       setMessages(messageList.data.messages);
//     }
//     getMessages();
//   }, []);

//   return (
//     <div className="message-content">
//       {messages.map((message) => {
//         return (
//           <div className="message-card" key={messages}>
//             <h1 className="message-title">
//               {" "}
//               Username: {messages.author.username}
//             </h1>
//             <h2 className="message-description">Message: {posts.messages}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
