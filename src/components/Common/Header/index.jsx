import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Search from "../../Dashboard/Search";
import DarkModeToggle from "../DarkMode";

const Header = ({ search, setSearch }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (darkMode) {
      setDark();
    } else {
      setLight();
    }
  }, [darkMode]);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <header
      className={`sticky inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-neutral-400 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl dark:border-neutral-600/40 dark:bg-dark-grey/40 dark:text-white/80`}
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link
              aria-current="page"
              className="flex items-center gap-4"
              to="/"
            >
              <img className="h-10 w-auto" src={logo} alt="logo" />
              <p
                className={`text-sm md:text-xl font-bold dark:text-white text-dark-grey
                `}
              >
                RCrypto <span className="text-primary-color">.</span>
              </p>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3">
            <div>
              {window.location.pathname !== "/dashboard" && (
                <Link
                  to="/dashboard"
                  className={`px-4 py-2 text-sm font-semibold rounded-full 
                    dark:text-primary-color dark:bg-dark-grey text-dark-grey bg-neutral-300
                    }`}
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
