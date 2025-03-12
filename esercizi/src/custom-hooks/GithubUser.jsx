import React from "react";
import { useGithubUser } from "./hooks/useGithubUser";

function GithubUser({ username }) {
  const { name, login, avatar } = useGithubUser(username);

  return (
    <li>
      <h2>{name}</h2>
      <p>{login}</p>
      <img src={avatar} alt="avatar" width="100" />
    </li>
  );
}

export default GithubUser;
