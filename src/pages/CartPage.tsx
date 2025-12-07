import { Box, Container, Typography } from "@mui/material";
import { useCart } from "../store";
import { ProductCardCart } from "../components/ProductCardCart";

export function CartPage() {
    const cart = useCart((state) => state.cart);
    const data = Object.values(cart);
    const cartIsNotEmpty = data.length > 0;
    return (
        <Container>
            <Box padding={4} gap={4} display={"flex"} flexDirection={"column"}>
                {cartIsNotEmpty ? data.map((cartItem) => (
                    <ProductCardCart key={cartItem.id} cartItem={cartItem} />
                )) : <Typography variant="h4">Koszyk jest pusty</Typography>}
            </Box>
        </Container>
    );
}