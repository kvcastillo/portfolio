import { useEffect, useState } from "react";

export const useDark = () => {
  // Get local storage value of Darkmode or set it (True or False)
  const init = () => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode === "true";
  };
  // Use init as initial value of this state (true or false)
  const [isDarkMode, setIsDarkMode] = useState(init);

  // A toggler for DarkMode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // On component mount this effect will check isDarkMode preference of a user save in browser.
  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }, [isDarkMode]);

  //   return the DarkModeValue and Toggler
  return [isDarkMode, toggleDarkMode];
};
