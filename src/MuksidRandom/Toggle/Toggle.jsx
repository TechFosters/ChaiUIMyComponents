import React from "react";
import { toggleDarkMode } from "./toggleLogic.js";

const Toggle = () => {
  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded">
      Toggle Dark Mode
    </button>
  );
};

export default Toggle;
