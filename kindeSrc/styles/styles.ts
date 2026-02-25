// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "Figtree, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "8px",
  buttonPrimaryBackgroundColor: "rgba(0, 167, 227, 1)",
  buttonPrimaryColor: "#fff",
  buttonBorderRadius: "8px",
  buttonSecondaryBackgroundColor: "#fff",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e9edec",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "8px",
} as const;

export const getStyles = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
    --kinde-control-text-color: #303947;
    --kinde-control-label-color: #303947;
    --kinde-shared-color-text-label: #303947;
    --kinde-base-background-color: #fff
    --kinde-designer-base-background-color: #fff;
    --kinde-base-color: #303947;
  }

  body, html {
    font-family: var(--kinde-base-font-family);
  }

  [data-kinde-choice-separator] {
    text-transform: uppercase;
  }
    
  .kinde-control-select-text {
    color: #303947;
  }
  .kinde-control-label {
    color: #303947;
  }
  .kinde-shared-color-text-label {
    color: #303947;
  }

  [data-kinde-layout-auth-buttons] { 
    display: flex;
    justify-content: center;
  }

  [data-kinde-layout-auth-buttons-item] {
    width: 100%;
    height: 3rem;
  }
  @media (max-width: 767px) { 
   .side-panel {
      display: none;
   }
  }
`;
