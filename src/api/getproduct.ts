import instance from "./axios";

export type Product = {
  _id: string;
  name: string;
  category: string;
  image: string[]; 
  price: number;
  offerPrice: number;
  rating?: number;
  description: string[]; 
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export async function getProducts(): Promise<Product[]> {
  const res = await instance.get("/api/product/list");
  return res.data.products;
}
