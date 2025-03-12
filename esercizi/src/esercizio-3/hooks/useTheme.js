import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("data-theme", theme);
    document.body.classList.add(theme);
    document.body.classList.remove(theme === "light" ? "dark" : "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default useTheme;
