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
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IProduct } from "../../app/interfaces/products.interface";
import { titleStyle, toCurrency } from "./ProductCard";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<IProduct>(`http://localhost:5000/api/v1/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h3>Loading...</h3>;

  if (!product) return <h3>Product not found.</h3>;

  return (
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
          titleTypographyProps={{ sx: titleStyle }}
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
  );
}
