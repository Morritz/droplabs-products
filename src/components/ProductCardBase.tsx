import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { Product } from "../api";
import { useLanguage } from "../i18n";
import { useState } from "react";

interface ProductCardBaseProps {
  product: Product;
  cardActions: React.ReactNode;
}

export function ProductCardBase({
  product,
  cardActions,
}: ProductCardBaseProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        alignItems: { xs: "center", sm: "normal" },
      }}
    >
      <CardMedia
        component="img"
        alt={product.title}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          aspectRatio: "1 / 1",
          p: 2,
          cursor: "pointer",
        }}
        image={product.image}
        onClick={() => setOpen(true)}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {product.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 1, alignItems: "center" }}>
          <Typography variant="body2">
            <strong>{t("category")}:</strong> {product.category}
          </Typography>
          <Rating value={product.rating.rate} readOnly size="small" />
          <Typography variant="body2">({product.rating.count})</Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>{cardActions}</CardActions>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: 1,
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Card>
  );
}
