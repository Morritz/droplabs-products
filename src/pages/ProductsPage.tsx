import { Container, Box, ButtonGroup, Button } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { useGetAllProductsQuery } from "../hooks/useGetAllProductsQuery";
import { ProductsLoadingError } from "../components/ProductsLoadingError";
import { CircularLoadingProgress } from "../components/CircularLoadingProgress";
import { useSortProducts } from "../hooks/useSortProducts";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export function ProductsPage() {
  const { data, isLoading, error } = useGetAllProductsQuery();

  const { sortedProducts, sortField, sortOrder, sortBy } =
    useSortProducts(data);

  if (isLoading) return <CircularLoadingProgress />;

  if (error || !data) return <ProductsLoadingError />;

  return (
    <Container>
      <Box p={4}>
        <ButtonGroup variant="contained" sx={{ mb: 3 }}>
          <Button
            onClick={() => sortBy("default")}
            color={sortField === "default" ? "primary" : "inherit"}
          >
            Domyślnie
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
            Tytuł
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
            Cena
          </Button>
        </ButtonGroup>
      </Box>
      <Box padding={4} gap={4} display={"flex"} flexDirection={"column"}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}

export default ProductsPage;
