import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const url = "https://api.github.com/users";

function ShowGithubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default ShowGithubUsers;
