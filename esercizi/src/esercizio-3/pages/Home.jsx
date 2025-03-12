import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/utente/1">Utente 1</Link>
        </li>
        <li>
          <Link to="/utente/2">Utente 2</Link>
        </li>
        <li>
          <Link to="/utente/3">Utente 3</Link>
        </li>
        <li>
          <Link to="/utente/4">Utente 4</Link>
        </li>
        <li>
          <Link to="/utente/5">Utente 5</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
