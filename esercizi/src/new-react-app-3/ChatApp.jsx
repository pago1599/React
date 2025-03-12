import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm just a bot!", sender: "bot" },
      ]);
    }, 1000);
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
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
