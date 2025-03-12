import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Hello() {
  const language = useContext(LanguageContext);
  return <h2>{language === "en" ? "Hello, World!" : "Ciao, Mondo!"}</h2>;
}
