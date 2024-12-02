import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const SelectDays = ({ days, handleDaysChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (day) => {
    handleDaysChange({ target: { value: day } });
    closeDropdown();
  };

  document.addEventListener("click", (event) => {
    if (event.target.id !== "hs-dropdown-days") {
      closeDropdown();
    }
  });

  return (
    <div className="relative inline-flex">
      <button
        id="hs-dropdown-days"
        type="button"
        onClick={toggleDropdown}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Dropdown"
      >
        {days} Days
        <FaAngleDown className="text-xl pointer-events-none" />
      </button>

      {isOpen && (
        <div
          className="absolute z-10  w-40 mt-12 bg-white shadow-md rounded-lg dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-days"
        >
          <div className="p-1 space-y-0.5 text-center">
            {[7, 30, 60, 90, 120, 365].map((day) => (
              <button
                key={day}
                className={`flex w-full text-center items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm ${
                  days === day
                    ? "bg-primary-color text-white"
                    : "text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                }`}
                onClick={() => handleOptionClick(day)}
              >
                {day === 365 ? "1 Year" : `${day} Days`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDays;
