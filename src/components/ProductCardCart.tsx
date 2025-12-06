import { Button, Typography } from "@mui/material";
import { useCart, type CartItem } from "../store";
import { ProductCardBase } from "./ProductCardBase";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

interface ProductCardCartProps {
    cartItem: CartItem;
};

export function ProductCardCart({ cartItem }: ProductCardCartProps) {
    const removeCart = useCart((state) => state.removeCart);
    return (
        <ProductCardBase
            product={cartItem}
            cardActions={<><Typography variant="h5">{cartItem.quantity}</Typography><Button onClick={() =>
                removeCart(cartItem.id)
            }><RemoveShoppingCartIcon /></Button></>} />
    );
}