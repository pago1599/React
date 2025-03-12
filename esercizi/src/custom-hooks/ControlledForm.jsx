import React from "react";
import { useForm } from "./hooks/useForm";

function ControlledForm() {
  const { username, password, handleUsername, handlePassword } = useForm();
  return (
    <form className="flex gap-2">
      <input
        className="border-2 border-gray-300 rounded-lg"
        type="text"
        value={username}
        onChange={handleUsername}
        placeholder="Enter username"
      />
      <input
        className="border-2 border-gray-300 rounded-lg"
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Enter password"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Login
      </button>
    </form>
  );
}

export default ControlledForm;
