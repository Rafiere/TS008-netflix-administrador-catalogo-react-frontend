import { createTheme } from "@mui/material";

/**
 * Esse arquivo conterá o tema que será utilizado em
 * toda a aplicação.
 */

/**
 * A função "createTheme" recebe um objeto, e esse objeto
 * conterá as configurações do tema que estamos criando.
 */

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f5f5f1" },
    secondary: { main: "#E50914" },
    text: { primary: "#f5f5f1" },
  },
});
