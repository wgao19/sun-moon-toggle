import { useState } from "react";

export const THEMES = ["sun", "moon"];
const getNewTheme = currentTheme =>
  THEMES.indexOf(currentTheme) >= 0
    ? THEMES[1 - THEMES.indexOf(currentTheme)]
    : THEMES[0];

export const useTheme = () => {
  const themeFromLocalStorage =
    typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState(themeFromLocalStorage || THEMES[0]);
  const toggleTheme = currentTheme => {
    const newTheme = getNewTheme(currentTheme);
    setTheme(newTheme);
  };
  useEffect(() => {
    typeof window !== "undefined" &&
      window.localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, toggleTheme };
};
