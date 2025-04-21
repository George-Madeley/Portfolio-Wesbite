"use client";

import "./ToggleDarkmode.css";

import React, { useContext } from "react";
import { ThemeContext } from "~/context";

export function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="toggle"
        value={isDarkMode ? "dark" : "light"}
        name="toggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="toggle" title="dark mode toggle"></label>
    </div>
  );
}
