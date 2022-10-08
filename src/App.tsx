import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";

/**
 * O "createTheme" criará um tema default, utilizando o Material UI e
 * fornecerá um objeto padrão, que o Provider passará para toda a aplicação. Esse
 * objeto padrão terá o tema da aplicação.
 */

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <Header></Header>
        <Layout>
          <h1>Olá, mundo!</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
