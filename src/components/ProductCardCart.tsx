import { Button, Typography } from "@mui/material";
import { useCart, type CartItem } from "../store";
import { ProductCardBase } from "./ProductCardBase";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useLanguage } from "../i18n";

interface ProductCardCartProps {
  cartItem: CartItem;
}

export function ProductCardCart({ cartItem }: ProductCardCartProps) {
  const removeCart = useCart((state) => state.removeCart);
  const { t } = useLanguage();
  return (
    <ProductCardBase
      product={cartItem}
      cardActions={
        <>
          <Typography variant="h5">
            {t("quantity")}: {cartItem.quantity}
          </Typography>
          <Button onClick={() => removeCart(cartItem.id)}>
            <RemoveShoppingCartIcon />
            {t("removeFromCart")}
          </Button>
        </>
      }
    />
  );
}
