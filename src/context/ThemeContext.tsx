"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
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
    if (document.body.classList.contains("dark")) {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
    const gradient = new Gradient();
    gradient.initGradient("#gradient");
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsDarkMode(true);
        document.body.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.body.classList.remove("dark");
      }
      const gradient = new Gradient();
      gradient.initGradient("#gradient");
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    if (mediaQuery.matches) {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
    const gradient = new Gradient();
    gradient.initGradient("#gradient");
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
