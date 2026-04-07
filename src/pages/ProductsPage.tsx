import { Container, Box, ButtonGroup, Button } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { RainbowBorder } from "../components/RainbowBorder";
import { useGetAllProductsQuery } from "../hooks/useGetAllProductsQuery";
import { ProductsLoadingError } from "../components/ProductsLoadingError";
import { ProductsEmptyList } from "../components/ProductsEmptyList";
import { CircularLoadingProgress } from "../components/CircularLoadingProgress";
import { useSortProducts } from "../hooks/useSortProducts";
import { useLanguage } from "../i18n";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useMemo } from "react";

export function ProductsPage() {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const { t } = useLanguage();

  const { sortedProducts, sortField, sortOrder, sortBy } =
    useSortProducts(data);

  const randomIndex = useMemo(() => {
    if (!sortedProducts.length) return -1;
    return Math.floor(Math.random() * sortedProducts.length);
  }, [sortedProducts.length]);

  if (isLoading) return <CircularLoadingProgress />;

  if (error || !data) return <ProductsLoadingError />;

  if (sortedProducts.length === 0) {
    return <ProductsEmptyList />;
  }

  return (
    <Container>
      <Box p={4}>
        <ButtonGroup variant="contained" sx={{ mb: 3 }}>
          <Button
            onClick={() => sortBy("default")}
            color={sortField === "default" ? "primary" : "inherit"}
          >
            {t("default")}
          </Button>
          <Button
            onClick={() => sortBy("title")}
            color={sortField === "title" ? "primary" : "inherit"}
            endIcon={
              sortField === "title" &&
              (sortOrder === "asc" ? (
                <ArrowUpwardIcon />
              ) : (
                <ArrowDownwardIcon />
              ))
            }
          >
            {t("title")}
          </Button>
          <Button
            onClick={() => sortBy("price")}
            color={sortField === "price" ? "primary" : "inherit"}
            endIcon={
              sortField === "price" &&
              (sortOrder === "asc" ? (
                <ArrowUpwardIcon />
              ) : (
                <ArrowDownwardIcon />
              ))
            }
          >
            {t("price")}
          </Button>
        </ButtonGroup>
      </Box>
      <Box padding={4} gap={4} display={"flex"} flexDirection={"column"}>
        {sortedProducts.map((product, index) =>
          index === randomIndex ? (
            <RainbowBorder key={product.id}>
              <ProductCard product={product} />
            </RainbowBorder>
          ) : (
            <ProductCard key={product.id} product={product} />
          ),
        )}
      </Box>
    </Container>
  );
}

export default ProductsPage;
