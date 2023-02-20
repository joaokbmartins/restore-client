import { Button } from "@mui/material";

import { IProduct } from "../../app/interfaces/products.interface";

import ProductList from "./ProductList";

interface IProps {
  products: IProduct[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: IProps) {
  return (
    <>
      <Button variant="contained" onClick={addProduct} sx={{ mb: 2 }}>
        Add Product
      </Button>

      <ProductList products={products} />
    </>
  );
}
