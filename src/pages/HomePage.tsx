import { useMemo } from "react";
import { CircularLoadingProgress } from "../components/CircularLoadingProgress";
import { ProductsLoadingError } from "../components/ProductsLoadingError";
import { useGetAllProductsQuery } from "../hooks/useGetAllProductsQuery";
import { ProductCard } from "../components/ProductCard";
import { Box, Container, Typography } from "@mui/material";
import { getRandomFromArray } from "../utils/getRandomFromArray";

export function HomePage() {
    const { data, isLoading, error } = useGetAllProductsQuery();

    const randomProduct = useMemo(() => {
        if (data && data.length > 0) {
            return getRandomFromArray(data)
        }
    }, [data]);

    if (isLoading)
        return <CircularLoadingProgress />

    if (error || !data) return (
        <ProductsLoadingError />
    );


    return (
        <Container>
            <Box p={4} display={"flex"} width={"100%"} justifyContent={"center"}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Losowy produkt
                </Typography>
            </Box>
            <Box p={4} gap={4} display={"flex"} flexDirection={"column"}>
                {randomProduct && <ProductCard product={randomProduct} />}
            </Box>
        </Container>
    )
}