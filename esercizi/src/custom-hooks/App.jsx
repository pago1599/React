import React from "react";
import Counter from "./Counter";
import ControlledForm from "./ControlledForm";
import { GitHubUsers } from "./GitHubUsers";
import GeoLocation from "./GeoLocation";

function App() {
  return (
    <div>
      <Counter />
      <div className="p-4"></div>
      <ControlledForm />
      <div className="p-4"></div>
      <GitHubUsers />
      <div className="p-4"></div>
      <GeoLocation />
    </div>
  );
}

export default App;
