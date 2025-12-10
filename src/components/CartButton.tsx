import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../store";
import { Link } from "react-router";

export function CartButton() {
  const count = useCart((state) => state.count);

  return (
    <IconButton
      size="large"
      color="inherit"
      aria-label="cart"
      component={Link}
      to="/cart"
    >
      <Badge badgeContent={count} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
