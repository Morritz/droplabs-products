import ky from "ky";
import * as v from "valibot";

const kyInstance = ky.create({
  prefixUrl: "https://fakestoreapi.com",
});

const ProductSchema = v.object({
  id: v.number(),
  title: v.string(),
  price: v.number(),
  description: v.string(),
  category: v.string(),
  image: v.pipe(v.string(), v.nonEmpty(), v.url()),
  rating: v.object({
    rate: v.number(),
    count: v.number(),
  }),
});

export type Product = v.InferOutput<typeof ProductSchema>;

export const getAllProducts = async (): Promise<Product[]> => {
  const data = await kyInstance.get("products").json();
  const products = v.parse(v.array(ProductSchema), data);
  return products;
};
