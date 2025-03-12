import { useParams } from "react-router-dom";

function ShowGithubUser() {
  const { username } = useParams();

  return <h3>Selected User: {username}</h3>;
}

export default ShowGithubUser;
