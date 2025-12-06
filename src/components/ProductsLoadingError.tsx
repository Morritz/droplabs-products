import { Box, Container, Typography } from "@mui/material";

export function ProductsLoadingError() {
    return <Container maxWidth="sm">
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
                Błąd
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
                Nie udało się pobrać produktów.
            </Typography>
        </Box>
    </Container>
}