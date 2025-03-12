import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <div>
      <form className="p-6 border-b border-white/10" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            placeholder="Crea un nuovo task..."
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-4 py-3 pl-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-500">
            +
          </span>
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md px-4 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          >
            Aggiungi
          </button>
        </div>
      </form>
    </div>
  );
}
