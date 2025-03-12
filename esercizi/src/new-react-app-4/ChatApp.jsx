import { useEffect, useState, useRef } from "react";
import useBot from "./hooks/useBot";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);

  const [input, setInput] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const { data, isLoading, error, mutate } = useBot(userMessage);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    setUserMessage(input); // Passa l'input dell'utente all'API
    setInput("");

    mutate(); // Attiva la richiesta API
  };

  // Quando `data` cambia, aggiungiamo la risposta del bot
  useEffect(() => {
    if (data) {
      setMessages((prev) => [...prev, { text: data, sender: "bot" }]);
    }
  }, [data]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col w-150 h-150 bg-gray-100 p-4 rounded-lg">
      <div className="flex-1 overflow-y-auto space-y-2 p-4 border rounded-lg bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="text-gray-500">Bot is typing...</div>}
        {error && <div className="text-red-500">Error: {error.message}</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
