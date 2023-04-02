import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    //Runs on the first render (İlk işlemde çalışır)
    //And any time any dependency value changes (ve belirtilen değerler değiştiğinde çalışır)

    localStorage.setItem("theme", theme);
  }, [theme]);

  const data = {
    theme,
    setTheme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default Provider;
