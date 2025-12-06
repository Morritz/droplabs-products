import { Box, Container } from "@mui/material";
import { useCart } from "../store";
import { ProductCardCart } from "../components/ProductCardCart";

export function CartPage() {
    const cart = useCart((state) => state.cart);
    const data = Object.values(cart);
    return (
        <Container>
            <Box padding={4} gap={4} display={"flex"} flexDirection={"column"}>
                {data.map((cartItem) => (
                    <ProductCardCart key={cartItem.id} cartItem={cartItem} />
                ))}
            </Box>
        </Container>
    );
}