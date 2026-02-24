"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  widget: React.CSSProperties;
} = {
  loginForm: {
    minWidth: "50%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
  },
  heading: {
    fontWeight: "600",
    fontSize: "2rem",
  },
  description: {
    marginBottom: "1.5rem",
  },
  widget: {
    maxWidth: "448px",
    margin: "0 auto",
  },
};

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <div style={styles.widget}>
        <h2 style={styles.heading}>{props.heading}</h2>
        <p style={styles.description}>{props.description}</p>
        {getKindeWidget()}
      </div>
    </main>
  );
};
