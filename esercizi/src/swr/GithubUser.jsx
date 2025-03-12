import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((r) => r.json());

function GithubUser({ username }) {
  const { data, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function fetchGithubUser() {
    mutate();
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <button className="bg-gray-300 p-2 rounded-lg" onClick={fetchGithubUser}>
        Reload user data
      </button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error:{error}</h1>}
      {data && <h1>{data.login}</h1>}
    </div>
  );
}

export default GithubUser;
