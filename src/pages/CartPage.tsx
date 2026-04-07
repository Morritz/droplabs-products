import { Box, Container, Typography } from "@mui/material";
import { useCart } from "../store";
import { ProductCardCart } from "../components/ProductCardCart";
import { useLanguage } from "../i18n";

export function CartPage() {
  const cart = useCart((state) => state.cart);
  const data = Object.values(cart);
  const cartIsNotEmpty = data.length > 0;
  const { t } = useLanguage();
  return (
    <Container>
      <Box padding={4} gap={4} display={"flex"} flexDirection={"column"}>
        {cartIsNotEmpty ? (
          data.map((cartItem) => (
            <ProductCardCart key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <Typography variant="h4">{t("emptyCart")}</Typography>
        )}
      </Box>
    </Container>
  );
}
