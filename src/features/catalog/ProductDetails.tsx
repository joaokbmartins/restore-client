import { Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

import { IProduct } from "../../app/interfaces/products.interface";

export async function productLoader({ params }: any) {
  const product = await fetch(
    `http://localhost:5000/api/v1/products/${params.id}`
  )
    .then((response) => response.json())
    .then((data: IProduct) => data);
  return product;
}

export default function ProductDetails() {
  const product = useLoaderData() as IProduct;

  return (
    <>
      <Typography variant="h2">Product Details</Typography>
    </>
  );
}
