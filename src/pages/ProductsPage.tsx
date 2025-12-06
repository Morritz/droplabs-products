import {
    Container,
    Box,
} from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { useGetAllProductsQuery } from '../hooks/useGetAllProductsQuery';
import { ProductsLoadingError } from '../components/ProductsLoadingError';
import { CircularLoadingProgress } from '../components/CircularLoadingProgress';

export function ProductsPage() {
    const { data, isLoading, error } = useGetAllProductsQuery();

    if (isLoading)
        return <CircularLoadingProgress />

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