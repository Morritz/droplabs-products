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
      <Box
        sx={{
          position: "relative",
          width: 200,
          height: 200,
          overflow: "hidden",
          "&:hover .zoom-icon": {
            opacity: 1,
          },
        }}
      >
        <CardMedia
          component="img"
          alt={product.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          image={product.image}
          onClick={() => setOpen(true)}
        />
        <Box
          className="zoom-icon"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </Box>
        </Box>
      </Box>
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
              objectFit: "cover",
            }}
          />
        </Box>
      </Modal>
    </Card>
  );
}
