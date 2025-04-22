"use server";

import "./Button.css";

import React, { PropsWithChildren } from "react";

export async function Button({ children }: PropsWithChildren) {
  return <div className="button">{children}</div>;
}
