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
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
  },
  heading: {
    fontWeight: "600",
    fontSize: "2rem",
    color: "white",
  },
  description: {
    marginBottom: "1.5rem",
    color: "white",
  },
  widget: {
    width: "100%",
    maxWidth: "448px",
    margin: "0 auto",
    color: "white",
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
