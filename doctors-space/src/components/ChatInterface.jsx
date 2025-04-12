// import { useState, useRef, useEffect } from 'react';
// import './ChatInterface.css';

// export default function ChatInterface() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     // Add user message
//     setMessages(prev => [...prev, { text: input, sender: 'user' }]);
//     setInput('');

//     // Commented out LLM functionality
//     /*
//     try {
//       // Call backend Ollama API
//       const response = await fetch('http://localhost:5000/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input })
//       });

//       const data = await response.json();
//       setMessages(prev => [...prev, { text: data.reply, sender: 'bot' }]);
//     } catch (error) {
//       setMessages(prev => [...prev, { 
//         text: "Sorry, I'm having trouble connecting. Please try again later.", 
//         sender: 'bot' 
//       }]);
//     }
//     */
//   };

//   return (
//     <div className="chat-container">
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <form onSubmit={handleSubmit} className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask about patients, schedules..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }