// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "Figtree, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "8px",
  buttonPrimaryBackgroundColor: "rgba(0, 167, 227, 1)",
  buttonPrimaryBackgroundColorHover: "#026aa2",
  buttonPrimaryColor: "#fff",
  buttonBorderRadius: "8px",
  buttonSecondaryBackgroundColor: "#fff",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e9edec",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "8px",
  errorColor: "#f04438"
} as const;

export const getStyles = (): string => `
  
  @font-face {
    font-family: 'Figtree'; 
    src: url('https://dashboard.sitescene.dev/fonts/variable/Figtree-VariableFont_wght.ttf') format('truetype-variations');
    font-weight: 100 900; 
    font-style: normal;
    font-display: swap;
  }

  :root {
    --kinde-base-font-family:  ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-color: #d5d7da;
    --kinde-control-select-text-border-color-hover: #d5d7da;
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-primary-background-color-hover: ${kindeVariables.buttonPrimaryBackgroundColorHover};
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
    --kinde-control-associated-text-invalid-message-color: ${kindeVariables.errorColor};
    --kinde-shared-color-invalid: ${kindeVariables.errorColor};
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
    height: 3rem;
  }
  .kinde-button.kinde-button-variant-primary {
    box-shadow: 0px 0px 0px 1px #0a0d122e inset, 0px -1px 0px 0px #0a0d120d inset, 0px 1px 1px #0a0d120d;
    position: relative;
  }
  @media (max-width: 767px) { 
   .side-panel {
      display: none;
   }
  }
`;
