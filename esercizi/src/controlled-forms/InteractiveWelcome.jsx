import React from "react";
import { useState } from "react";
import { Welcome } from "./Welcome";

export default function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        className="border-2 border-gray-300"
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <Welcome name={name} />
    </div>
  );
}
