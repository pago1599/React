import React from "react";
import { useState } from "react";
import GitHubUser from "./GithubUser";

export function GitHubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  function handleClick() {
    setUsers([...users, username]);

    setUsername("");
  }

  return (
    <div className="flex gap-2">
      <input
        className="border-2 border-gray-300  rounded-lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded-lg p-2"
        type="submit"
        onClick={handleClick}
      >
        Search
      </button>
      {users.map((user, i) => (
        <GitHubUser key={i} username={user} />
      ))}
    </div>
  );
}
