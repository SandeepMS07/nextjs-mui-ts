import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    KenColors: Partial<Record<string, string>>;
    card: {
      backgroundColor: string;
      hover: string;
    };
    labels: {
      main: string;
      light: string;
      medium: string;
    };
  }
  interface PaletteOptions {
    KenColors: Partial<Record<string, string>>;
    card: {
      backgroundColor: string;
      hover: string;
    };
    labels: {
      main: string;
      light: string;
      medium: string;
    };
  }
}
