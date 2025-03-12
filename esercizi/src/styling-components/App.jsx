import React from "react";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import Login from "./Login";

function App() {
  const handlelogin = (loginData) => {
    console.log("Login data:", loginData);
  };
  return (
    <div>
      <Welcome name="Fabio" />
      <Counter initialValue={0} incrementAmount={1} />
      <Login onLogin={handlelogin} />
    </div>
  );
}

export default App;
