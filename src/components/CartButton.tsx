import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "../store";

export function CartButton() {
    const { count } = useCart();

    return <IconButton
        size="large"
        color="inherit"
        aria-label="cart"
    >
        <Badge badgeContent={count} color="error">
            <ShoppingCartIcon />
        </Badge>
    </IconButton>
}