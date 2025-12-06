import {
    Container,
    CircularProgress,
    Box,
} from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { useGetAllProductsQuery } from '../hooks/useGetAllProductsQuery';
import { ProductsLoadingError } from '../components/ProductsLoadingError';

export function ProductsPage() {
    const { data, isLoading, error } = useGetAllProductsQuery();

    if (isLoading)
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                <CircularProgress />
            </Box>
        );

    if (error || !data) return (
        <ProductsLoadingError />
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