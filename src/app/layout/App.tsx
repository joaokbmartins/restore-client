import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Catalog from "../../features/catalog/catalog";
import { IProduct } from "../interfaces/products.interface";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  function fetchData() {
    return fetch("http://localhost:5000/api/v1/Products")
      .then(response => response.json())
      .then((json: IProduct[]) => json);
  }

  useEffect(() => {
    fetchData()
      .then((data: IProduct[]) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts(
      (previousState: IProduct[]) =>
        [
          ...previousState,
          {
            "id": previousState.slice(-1)[0].id + 1,
            "price": 0,
            "quantityInStock": 0,
            "brand": 'string',
            "description": 'string',
            "name": 'string',
            "pictureUrl": 'string',
            "type": 'string',
          }
        ]
    );
  }

  return (
    <>
      <Typography variant="h1">Re-Store</Typography>

      <Catalog products={products} addProduct={addProduct} />

    </>
  );
}

export default App;
