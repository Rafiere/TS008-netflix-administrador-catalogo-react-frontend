import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/theme";
import { CategoryCreate } from "./features/categories/CategoryCreate";
import { CategoryEdit } from "./features/categories/CategoryEdit";
import { CategoryList } from "./features/categories/CategoryList";

/**
 * O "createTheme" criará um tema, utilizando o Material UI e
 * fornecerá um objeto padrão, que o Provider passará para toda a aplicação. Esse
 * objeto padrão terá o tema da aplicação.
 */

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header></Header>
        <Layout>
          <Typography variant="h1" component="h1">
            News
          </Typography>

          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />
            <Route path="*" element={<div></div>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
