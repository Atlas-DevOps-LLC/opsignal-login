import React from "react";

const styles: {
  container: React.CSSProperties;
  sidePanel: React.CSSProperties;
  primaryLogo: React.CSSProperties;
  secondaryLogo: React.CSSProperties;
  logoContainer: React.CSSProperties;
  contentContainer: React.CSSProperties;
  footer: React.CSSProperties;
  footerLink: React.CSSProperties;
  header: React.CSSProperties;
  backgroundImageBlock: React.CSSProperties;
  panelImage: React.CSSProperties;
} = {
  container: {
    display: "flex",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 32px 16px",
    width: "50%",
    height: "100%",
    flex: "1"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    width: "132px",
    height: "32px",
  },
  primaryLogo: {
    fill: "#017aa9"
  },
  secondaryLogo: {
    fill: "#303947"
  },
  footer: {
    fontSize: "14px",
    color: "#414651",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  footerLink: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "#414651",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.01em",
    fontFamily: "Figtree, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  },
  sidePanel: {
    backgroundColor: "rgba(0, 167, 227, 1)",
    backgroundImage: "linear-gradient(90deg in oklab, rgb(6, 89, 134) 0%, rgb(0, 167, 227) 100%)",
    width: "50%"
  },
  backgroundImageBlock: {
    display: "flex",
    height: "100dvh",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: "80px",
    paddingTop: "80px",
    paddingBottom: "80px"
  },
  panelImage: {
    objectFit: "cover",
    borderColor: "#d5d7da",
    borderWidth: "10px",
    borderRightWidth: "0px",
    borderTopLeftRadius: "24px",
    borderBottomLeftRadius: "24px",
    borderStyle: "solid",
    height: "100%",
    objectPosition: "left top"
  }
};

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.header}>
          <div style={styles.logoContainer}><svg viewBox="0 0 348.05 73.9" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1-2"><g id="OpSignal_Light_BG"><path style={styles.primaryLogo} d="M25.48 9.38C10.95 9.38 0 20.27 0 34.71s10.95 25.34 25.48 25.34 25.54-10.89 25.54-25.34S40.04 9.37 25.48 9.37Zm19.81 25.33c0 11.34-8.52 19.89-19.81 19.89S5.66 46.05 5.66 34.71s8.52-19.88 19.82-19.88 19.81 8.55 19.81 19.88Z" id="O"></path><path style={styles.primaryLogo} d="M85.16 20.06c-10.7 0-19.15 7.84-19.9 18.35h-.03l-.03.64v.68l-.01 32.83v1.33h5.52V53.9c3.69 3.79 8.86 5.94 14.44 5.94 11.42 0 20.03-8.55 20.03-19.89s-8.61-19.89-20.03-19.89Zm0 34.41c-8.23 0-14.44-6.24-14.44-14.51s6.21-14.51 14.44-14.51S99.6 31.69 99.6 39.96s-6.21 14.51-14.44 14.51Z" id="P"></path><path style={styles.secondaryLogo} d="M134.44 31.82c-6.42-1.93-11.96-3.6-11.96-9.03 0-4.7 4.27-8.16 10.16-8.21h13.66l.07-5.18h-13.65c-9.25.05-15.97 5.83-15.97 13.74 0 9.15 8.23 11.67 15.5 13.9 6.47 1.98 12.06 3.7 12.06 9.23 0 5.02-4.68 8.67-11.13 8.7H116.7v5.18h16.48c9.77-.03 16.86-6.07 16.86-14.36 0-9.26-8.29-11.76-15.6-13.96Z" id="S"></path><path style={styles.secondaryLogo} d="M163.83 59.02h5.45V34.77h-5.45v24.25Zm2.72-38.95a3.91 3.91 0 1 0 0 7.82 3.91 3.91 0 1 0 0-7.82Z" id="I"></path><path style={styles.secondaryLogo} d="M202.94 20.07c-11.38 0-19.96 8.55-19.96 19.89s8.58 19.89 19.96 19.89c5.65 0 10.87-2.18 14.58-6.05-.05 8.71-5.74 14.79-13.86 14.79-5.84 0-7.3-.68-12.14-2.92-.69-.32-1.45-.67-2.3-1.06l-.92-.42v5.83l.3.19c.24.15 5.92 3.69 14.99 3.69 11.23 0 19.38-8.53 19.38-20.29V39.96c0-11.34-8.61-19.89-20.03-19.89Zm14.44 19.89c0 8.27-6.21 14.51-14.44 14.51s-14.44-6.24-14.44-14.51 6.21-14.51 14.44-14.51 14.44 6.24 14.44 14.51Z" id="G"></path><path style={styles.secondaryLogo} d="M256.11 20.09c-9.63 0-17.46 7.83-17.46 17.46v21.47h5.45V37.55c0-6.62 5.39-12.01 12.01-12.01s12.01 5.39 12.01 12.01v21.47h5.45V37.55c0-9.63-7.83-17.46-17.46-17.46Z" id="N"></path><path style={styles.secondaryLogo} d="M326.68 38.41c-.75-10.5-9.2-18.35-19.9-18.35-11.42 0-20.03 8.55-20.03 19.89s8.61 19.89 20.03 19.89c5.58 0 10.75-2.14 14.44-5.94V59h5.52V38.4h-.06Zm-5.46 1.55c0 8.27-6.21 14.51-14.44 14.51s-14.44-6.24-14.44-14.51 6.21-14.51 14.44-14.51 14.44 6.24 14.44 14.51Z" id="A"></path><path style={styles.secondaryLogo} d="M347.4 10.02H342.6v49H348.05v-49h-.65z" id="L"></path><path style={styles.secondaryLogo} d="M43.41 2.73c0 1.51 1.22 2.73 2.73 2.73h7.15c.61 0 1.1.49 1.1 1.1v7.22c0 1.51 1.22 2.73 2.73 2.73s2.73-1.22 2.73-2.73V0h-13.7c-1.51 0-2.73 1.22-2.73 2.73Z" id="Arrow"></path></g></g></svg></div>
      </div>
      {props.children}
      <div style={styles.footer}>
          <p>© OpSignal 2026</p><a href="mailto:support@opsignal.ai" style={styles.footerLink}><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m2 7 8.165 5.715c.661.463.992.695 1.351.784a2 2 0 0 0 .968 0c.36-.09.69-.32 1.351-.784L22 7M6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20Z"></path></svg><span>support@opsignal.ai</span></a>
      </div>
      </div>
      <div className="side-panel" style={styles.sidePanel}>
        <div style={styles.backgroundImageBlock}>
          <img style={styles.panelImage} src="https://dashboard.opsignal.ai/media-files/login/login-light-mode.png" />
        </div>
      </div>
    </div>
  );
};
