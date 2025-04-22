"use client";

import "./Copy.css";

import React, { Fragment, useCallback } from "react";

import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CopyProps {
  id: string;
  text: string;
}

export function Copy(props: CopyProps) {
  const copyToClipboard = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // get the text to copy
      const text = e.target.value;
      // copy the text to the clipboard
      navigator.clipboard.writeText(text);

      // After 5 seconds, remove the check mark
      setTimeout(() => {
        const radio = document.getElementById(e.target.id) as HTMLInputElement;
        radio.checked = false;
      }, 2000);
    },
    []
  );

  return (
    <Fragment>
      <input
        className="copy-input"
        id={props.id}
        name="contact"
        onChange={copyToClipboard}
        type="radio"
        value={props.text}
      />
      <label className="copy-icon" htmlFor={props.id}>
        <FontAwesomeIcon icon={faCheck} />
        <FontAwesomeIcon icon={faCopy} />
      </label>
    </Fragment>
  );
}
