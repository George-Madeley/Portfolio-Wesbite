import React from "react";
import "./Button.css";

export default function Button(props: any) {
  return <div className="button">{props.children}</div>;
}
