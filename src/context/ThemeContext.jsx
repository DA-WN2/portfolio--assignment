import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Default to light theme, ignore system preference
    return false;
  });

  // Apply theme on mount and whenever isDark changes
  useEffect(() => {
    const html = document.documentElement;
    const themeValue = isDark ? "dark" : "light";

    // Set data-theme attribute (CSS variables will respond to this)
    html.setAttribute("data-theme", themeValue);

    // Also keep the 'dark' class for Tailwind compatibility
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    // Save preference
    localStorage.setItem("theme", themeValue);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
