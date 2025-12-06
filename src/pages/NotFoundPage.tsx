import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

export function NotFoundPage() {
    const navigate = useNavigate();

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
                <Typography variant="h1" component="h1" fontSize="6rem" fontWeight="bold">
                    404
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                    Strona nie znaleziona
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={2}>
                    Przepraszamy, szukana strona nie istnieje.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/')}
                >
                    Powrót do strony głównej
                </Button>
            </Box>
        </Container>
    );
}