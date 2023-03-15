import axios from "axios";
import { useLoaderData } from "react-router-dom";

import { IProduct } from "../../app/interfaces/products.interface";
import ProductList from "./ProductList";

export async function catalogLoader() {
  try {
    const response = await axios.get<IProduct[]>(
      "http://localhost:5000/api/v1/Products"
    );
    const products = await response.data;
    return products;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function Catalog() {
  const products = useLoaderData() as IProduct[];
  return <ProductList products={products} />;
}
