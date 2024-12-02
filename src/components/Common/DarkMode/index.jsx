import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-full ${
        darkMode ? "bg-dark-grey text-white" : "bg-primary-color text-black"
      }`}
    >
      {darkMode ? (
        <MdOutlineLightMode className="text-xl" />
      ) : (
        <MdDarkMode className="text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;
