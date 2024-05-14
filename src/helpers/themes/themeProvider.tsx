"use client";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import KenColors from "./kenColors";

interface GlobalThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    KenColors: { ...KenColors },
    primary: {
      light: "#757ce8",
      main: "#092682",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    error: {
      main: "#E75547",
    },
    success: {
      main: "#1BBE75",
    },
    card: {
      backgroundColor: "#F7F8FB",
      hover: "#EDF2FF",
    },
    labels: {
      main: "#061938",
      light: "#7A869A",
      medium: "#505F79",
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontFamily: ["GeneralSans"].join(","),
    body1: {
      fontSize: "16",
    },
    body2: {
      fontSize: 18,
      fontWeight: 500,
    },
    caption: {
      fontSize: "14px",
    },
    h1: {
      fontSize: "48px",
    },
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "32px",
    },
    h4: {
      fontSize: "24px",
    },
    h5: {
      fontSize: "16px",
    },
    h6: {
      fontSize: "8px",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            textTransform: "capitalize",
            background: KenColors.ClientPrimary,
            color: "#fff",
          },
        },
        {
          props: { variant: "text" },
          style: {
            textTransform: "capitalize",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "capitalize",
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1025,
      lg: 1200,
      xl: 1536,
    },
  },
});
const GlobalThemeProvider: React.FC<GlobalThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalThemeProvider;
