import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Hello } from "./Hello";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }
  return (
    <div className="flex flex-col items-center gap-2 ">
      <select name="language" value={language} onChange={handleSetLanguage}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
