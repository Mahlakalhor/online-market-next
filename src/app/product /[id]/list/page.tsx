import { getProducts } from "@/api/getproduct";
import ProductsList from "./Productslist";

export default async function Page() {
  const products = await getProducts();
  return <ProductsList products={products} />;
}