import React from "react";
import { useMemo } from "react";
import { useState, useEffect } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((r) => r.json())
      .then((data) => setUserList(data));
  }, []);

  const searchUsers = useMemo(
    () =>
      userList.filter(
        (user) =>
          !input ||
          (user.name && user.name.toLowerCase().includes(input.toLowerCase()))
      ),
    [input]
  );

  return (
    <form>
      <input
        className="border-2 border-gray-300 rounded-lg"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <ul>
        {searchUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </form>
  );
}

export default App;
