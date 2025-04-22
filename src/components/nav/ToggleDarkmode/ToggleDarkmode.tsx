"use client";

import "./ToggleDarkmode.css";

import React, { useContext } from "react";
import { ThemeContext } from "~/context";

export function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <input
        checked={isDarkMode}
        id="toggle"
        name="toggle"
        onChange={toggleDarkMode}
        type="checkbox"
        value={isDarkMode ? "dark" : "light"}
      />
      <label htmlFor="toggle" title="dark mode toggle"></label>
    </div>
  );
}
