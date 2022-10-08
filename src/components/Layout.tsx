import { Box, Container } from "@mui/material";
import React from "react";

/**
 * Esse componente receberá outros componentes como
 * filhos, e ele definirá uma renderização padrão para todos
 * os filhos desse componente.
 */

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 4,
          bg: "white",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
