import { Box, Container } from "@mui/material";
import React from "react";

/**
 * Esse componente receberá outros componentes como
 * filhos, e ele definirá uma renderização padrão para todos
 * os filhos desse componente.
 */

/**
 * A propriedade "sx" é um superset do CSS que permite a utilização de
 * várias propriedades, adaptadas para o Material UI.
 */

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
