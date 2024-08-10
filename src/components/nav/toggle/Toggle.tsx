import React from "react";
import "./Toggle.css";

export default function Toggle(props: any) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="toggle"
        value={props.state}
        name="toggle"
        checked={props.state}
        onChange={props.handleChange}
      />
      <label htmlFor="toggle" title="dark mode toggle"></label>
    </div>
  );
}
