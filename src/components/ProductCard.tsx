import { Button } from "@mui/material";
import type { Product } from "../api";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../store";
import { ProductCardBase } from "./ProductCardBase";

interface ProductCardProps {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    const addCart = useCart((state) => state.addCart);
    return (
        <ProductCardBase
            product={product}
            cardActions={<Button onClick={() =>
                addCart({
                    ...product,
                    quantity: 1,
                })
            }><AddShoppingCartIcon /></Button>} />
    );
}