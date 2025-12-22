import { getProducts } from "@/api/getproduct";
import ProductDetails from "./ProductDetails";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const products = await getProducts();
  const product = products.find((p) => p._id === params.id);

  if (!product) return <div className="p-6">Product not found</div>;

  return <ProductDetails product={product} />;
}