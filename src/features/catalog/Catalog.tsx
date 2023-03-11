import { useLoaderData } from "react-router-dom";

import { IProduct } from "../../app/interfaces/products.interface";
import ProductList from "./ProductList";

export async function catalogLoader() {
  const products = await fetch("http://localhost:5000/api/v1/Products")
    .then((response) => response.json())
    .then((data: IProduct[]) => data);
  return products;
}

export default function Catalog() {
  const products = useLoaderData() as IProduct[];
  return <ProductList products={products} />;
}
