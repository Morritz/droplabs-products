import { Box, Container, Typography } from "@mui/material";

export function ProductsEmptyList() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
        gap={2}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Brak produktów
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          Nie znaleziono produktów do wyświetlenia.
        </Typography>
      </Box>
    </Container>
  );
}
