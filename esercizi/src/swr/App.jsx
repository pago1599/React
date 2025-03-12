import React from "react";
import { GitHubUsers } from "./GithubUsers";
import { SWRConfig } from "swr";
import { fetcher } from "./GithubUser";
function App() {
  return (
    <div>
      <SWRConfig value={{ fetcher }}>
        <GitHubUsers />
      </SWRConfig>
    </div>
  );
}

export default App;
