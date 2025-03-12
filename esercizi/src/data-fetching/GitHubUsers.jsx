import React from "react";
import { useState } from "react";
import GitHubUser from "./GitHubUser";

export function GitHubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  function handleClick() {
    setUsers([...users, username]);

    setUsername("");
  }

  return (
    <div>
      <input
        className="border-2 border-gray-400 p-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded-lg p-2"
        type="submit"
        onClick={handleClick}
      >
        Cerca
      </button>
      {users.map((user, i) => (
        <GitHubUser key={i} username={user} />
      ))}
    </div>
  );
}
