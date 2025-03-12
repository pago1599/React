import React from "react";
import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleRemember = (event) => setRemember(event.target.checked);

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  const isLoginDisabled = !username || !password;

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="Enter username"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter password"
        />
        <label>
          Remember me
          <input type="checkbox" checked={remember} onChange={handleRemember} />
        </label>
        <button
          style={{
            backgroundColor: password.length >= 8 ? "green" : "red",
            color: "white",
          }}
          type="submit"
          disabled={isLoginDisabled}
        >
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
