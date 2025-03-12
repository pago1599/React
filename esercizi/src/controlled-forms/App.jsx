import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

function App() {
  const handlelogin = (loginData) => {
    console.log("Login data:", loginData);
  };
  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={handlelogin} />
    </div>
  );
}

export default App;
