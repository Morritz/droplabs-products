import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../api";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductCardProps {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
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
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button><AddShoppingCartIcon /></Button>
            </CardActions>
        </Card>
    );
}