"use server";

import "./Heading.css";

import React, { PropsWithChildren } from "react";

export async function Heading({ children }: PropsWithChildren) {
  return (
    <div className="heading-container">
      <div className="heading-bg">
        <div className="heading-visible heading-split">{children}</div>
      </div>
      <div className="heading-visible heading-burn">{children}</div>
      <div className="heading-visible heading-overlay">{children}</div>
      <div className="heading-invisible">{children}</div>
    </div>
  );
}
