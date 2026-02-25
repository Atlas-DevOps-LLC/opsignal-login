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
    --kinde-control-select-text-border-color: #d5d7da;
    --kinde-control-select-text-border-color-hover: #d5d7da;
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
    --kinde-base-background-color: #fff;
    --kinde-designer-base-background-color: #fff;
    --kinde-base-color: #303947;
    --kinde-base-focus-outline-offset: 0;
    --kinde-base-focus-outline-width: 1.5px;
    --kinde-base-focus-outline-color: #0ba5ec;
  }

  body, html {
    font-family: var(--kinde-base-font-family);
  }

  [data-kinde-choice-separator] {
    text-transform: uppercase;
  }
    
  .kinde-control-select-text {
    color: #303947;
    line-height: 22px;
    font-size: 16px;
    padding: 10px 14px;
    height: auto;

  }
  .kinde-control-select-text:hover {
    border-color: var(--kinde-control-select-text-border-color-hover);
  }
  .kinde-control-label {
    color: #303947;
    font-size: 14px;
    padding-bottom: 6px;
  }
  .kinde-shared-color-text-label {
    color: #303947;
  }
  .kinde-choice-separator {
    display: none;
  }
  [data-kinde-layout-auth-buttons] { 
    display: flex;
    justify-content: center;
  }
  .kinde-form {
    margin-bottom: 12px;
  }
  [data-kinde-layout-auth-buttons-item] {
    width: 100%;
  }

  [data-kinde-layout-auth-buttons-item] > button,
  [data-kinde-layout-auth-buttons-item] > a,
  [data-kinde-layout-auth-buttons-item] > [role="button"],
  .kinde-button-primary,
  .kinde-button {
    align-items: center;
    animation-duration: 0.1s;
    animation-timing-function: linear;
    appearance: button;
    background-color: var(--kinde-button-primary-background-color);
    border: 0 solid #fff;
    border-radius: 8px;
    box-shadow:
      rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0) 0 0 0 1px inset,
      rgba(10, 13, 18, 0.18) 0 0 0 1px inset,
      rgba(10, 13, 18, 0.05) 0 -2px 0 0 inset,
      rgba(10, 13, 18, 0.05) 0 1px 2px 0;
    box-sizing: border-box;
    color: var(--kinde-button-primary-color);
    column-gap: 6px;
    cursor: pointer;
    display: flex;
    font-family: var(--kinde-base-font-family);
    font-size: 16px;
    font-weight: 600;
    height: 44px;
    justify-content: center;
    line-height: 24px;
    opacity: 1;
    outline-color: var(--kinde-base-focus-outline-color);
    padding: 10px 16px;
    position: relative;
    row-gap: 6px;
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    touch-action: manipulation;
    transition-duration: 0.1s;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter;
    transition-timing-function: linear;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    white-space: nowrap;
    width: 100%;
  }

  [data-kinde-layout-auth-buttons-item] > button:hover,
  [data-kinde-layout-auth-buttons-item] > a:hover,
  [data-kinde-layout-auth-buttons-item] > [role="button"]:hover,
  .kinde-button-primary:hover {
    filter: brightness(0.98);
  }

  [data-kinde-layout-auth-buttons-item] > button:focus-visible,
  [data-kinde-layout-auth-buttons-item] > a:focus-visible,
  [data-kinde-layout-auth-buttons-item] > [role="button"]:focus-visible,
  .kinde-button-primary:focus-visible {
    outline: var(--kinde-base-focus-outline-width) solid var(--kinde-base-focus-outline-color);
    outline-offset: var(--kinde-base-focus-outline-offset);
  }
  @media (max-width: 767px) { 
   .side-panel {
      display: none;
   }
  }
`;
