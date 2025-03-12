import React from "react";
import { useState, useEffect } from "react";

function GitHubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);

  if (!data) {
    return `User not found`;
  }

  return (
    <li>
      <h2>{data?.name}</h2>
      <p>{data?.login}</p>
      <img src={data?.avatar_url} alt="avatar" width="100" />
    </li>
  );
}

export default GitHubUser;
