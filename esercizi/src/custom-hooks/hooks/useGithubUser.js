import { useEffect } from "react";
import { useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setData(json);
        });
    }
  }, [username]);

  if (!data) {
    return `User not found`;
  }

  return {
    name: data.name,
    login: data.login,
    avatar: data.avatar_url,
  };
}
