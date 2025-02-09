import { createTheme } from "@mui/material/styles";
import StyleScriptttf from "../src/assets/fonts/StyleScript-Regular.ttf";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: {
      default: "#0E0F11",
      paper: "#1E1F23",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Vazir, StyleScript, Arial, sans-serif",
    button: { textTransform: "none" },
    h1: { fontSize: "12rem", fontWeight: "bold", color: "#ffffff" },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": [
          {
            fontFamily: "StyleScript",
            fontStyle: "normal",
            fontWeight: 400,
            fontDisplay: "swap",
            src: `local('StyleScript'), url(${StyleScriptttf}) format('ttf')`,
          },
        ],
        body: {
          backgroundColor: "#0E0F11",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: "8px 24px",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: "rgba(0, 0, 0, 0)",
        },
      },
    },
  },
});

export default darkTheme;
