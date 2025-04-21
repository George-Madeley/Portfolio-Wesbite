"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";
import { Gradient } from "whatamesh";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDarkMode(isSystemDark)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient");
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
