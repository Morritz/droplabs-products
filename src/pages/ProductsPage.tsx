import {
    Container,
    CircularProgress,
    Box,
    Button,
    Typography,
} from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router';
import { useGetAllProductsQuery } from '../hooks/useGetAllProductsQuery';

export function ProductsPage() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetAllProductsQuery();


    if (isLoading)
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                <CircularProgress />
            </Box>
        );

    if (error || !data) return (
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
                    Błąd
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={2}>
                    Nie udało się pobrać produktów.
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

    return (
        <Container>
            <Box padding={4} gap={4} display={"flex"} flexDirection={"column"}>
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Box>
        </Container>
    );
}

export default ProductsPage;