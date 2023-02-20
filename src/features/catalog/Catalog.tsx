import { useEffect, useState } from "react";

import { IProduct } from "../../app/interfaces/products.interface";

import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<IProduct[]>([]);

  function fetchData() {
    return fetch("http://localhost:5000/api/v1/Products")
      .then((response) => response.json())
      .then((json: IProduct[]) => json);
  }

  useEffect(() => {
    fetchData().then((data: IProduct[]) => setProducts(data));
  }, []);

  return <ProductList products={products} />;
}
