import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#4B4CB6",
    },
    secondary: {
      main: "#5574F8",
    },
    success: {
      main: "#4BD37B",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: ["var(--ff--inter)"],
    fontSize: 16,
    textAlign: "left",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdl: 1000,
      lg: 1200,
      xlg: 1400,
      xl: 1536,
    },
  },
});

export const colors = {};

export default theme;
