import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";

import { IProduct } from "../../app/interfaces/products.interface";
import { titleStile, toCurrency } from "./ProductCard";

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
      <Box sx={{ display: "flex" }}>
        <CardMedia
          title={product.name}
          image={`../assets/images/${product.imagePath}`}
          sx={{
            width: 500,
            backgroundSize: "contain",
            p: 2,
          }}
        />

        <Box>
          <CardHeader
            avatar={
              <Avatar sx={{ backgroundColor: "primary.light", color: "white" }}>
                {product.name.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={product.name}
            titleTypographyProps={titleStile}
          ></CardHeader>

          <Divider />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {product.description}
            </Typography>

            <Typography gutterBottom color="secondary" variant="h5">
              R$ {toCurrency(product.price)}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.brand} / {product.type}
            </Typography>
          </CardContent>

          <CardActions sx={{ float: "right" }}>
            <Button
              size="large"
              sx={{
                color: "white",
                backgroundColor: "primary.light",
                "&:hover": {
                  backgroundColor: "secondary.light",
                },
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Box>
      </Box>
    </>
  );
}
