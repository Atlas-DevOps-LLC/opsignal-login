import React from "react";

const styles: {
  container: React.CSSProperties;
  sidePanel: React.CSSProperties;
} = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidePanel: {
    backgroundColor: "rgba(0, 167, 227, 1)",
    backgroundImage: "linear-gradient(90deg in oklab, rgb(6, 89, 134) 0%, rgb(0, 167, 227) 100%)",
    flex: 1,
    maxWidth: "1024px",
  },
};

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.container}>
      {props.children}
      <div style={styles.sidePanel}></div>
    </div>
  );
};
