import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={"flex flex-col gap-2"}>
      <button
        className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer"
        onClick={toggleTheme}
      >
        Cambia tema
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utente/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
