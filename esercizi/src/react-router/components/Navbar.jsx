import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-2">
      <Link
        className="bg-gray-300 rounded-lg p-2 border-2 hover:border-gray-500"
        to="/"
      >
        Welcome
      </Link>
      <Link
        className="bg-gray-300 rounded-lg p-2 border-2 hover:border-gray-500"
        to="/counter"
      >
        Counter
      </Link>
      <Link
        className="bg-gray-300 rounded-lg p-2 border-2 hover:border-gray-500"
        to="/users"
      >
        ShowGithubUsers
      </Link>
    </nav>
  );
}

export default Navbar;
