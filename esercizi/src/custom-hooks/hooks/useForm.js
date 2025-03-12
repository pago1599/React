import { useState } from "react";

export function useForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  return {
    username: username,
    password: password,
    handleUsername: handleUsername,
    handlePassword: handlePassword,
  };
}
