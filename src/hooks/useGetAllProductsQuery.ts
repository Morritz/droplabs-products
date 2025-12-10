import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api";

export function useGetAllProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
}
