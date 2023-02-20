import { Grid } from "@mui/material";

import { IProduct } from "../../app/interfaces/products.interface";
import ProductCard from "./ProductCard";

interface IProps {
  products: IProduct[];
}

export default function ProductList({ products }: IProps) {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
