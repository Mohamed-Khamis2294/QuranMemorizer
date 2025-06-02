import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
