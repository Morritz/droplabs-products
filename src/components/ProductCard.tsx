import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box, Rating } from "@mui/material";
import type { Product } from "../api";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../store";

interface ProductCardProps {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    const addCart = useCart((state) => state.addCart);
    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%', alignItems: { xs: "center", sm: "normal" } }}>
            <CardMedia
                component="img"
                alt={product.title}
                sx={{ width: 200, height: 200, objectFit: "contain", aspectRatio: "1 / 1", p: 2 }}
                image={product.image}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {product.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 1, alignItems: 'center' }}>
                    <Typography variant="body2">
                        <strong>Kategoria:</strong> {product.category}
                    </Typography>
                    <Rating value={product.rating.rate} readOnly size="small" />
                    <Typography variant="body2">({product.rating.count})</Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() =>
                    addCart({
                        ...product,
                        price: product.price,
                        quantity: 1,
                    })
                }><AddShoppingCartIcon /></Button>
            </CardActions>
        </Card>
    );
}