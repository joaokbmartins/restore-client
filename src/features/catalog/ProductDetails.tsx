import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IProduct } from "../../app/interfaces/products.interface";
import Currency from "../../app/utils/Currency";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get<IProduct>(
        `http://localhost:5000/api/v1/products/${id}`
      );
      const product = response.data;
      setProduct(product);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;

  if (!product) return <h3>Product not found.</h3>;

  return (
    <Grid container spacing={6}>
      <Grid item xs={5} sx={{ minWidth: "270px" }}>
        <img
          src={`../assets/images/${product.imagePath}`}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid>

      <Grid item xs={7} sx={{ minWidth: { xs: "270px" } }}>
        <Typography variant="h4">{product.name}</Typography>

        <Divider sx={{ mb: 3 }} />

        <Typography gutterBottom variant="h5">
          {product.description}
        </Typography>

        <Typography color="text.secondary" mb={0.5}>
          {product.brand} / {product.type}
        </Typography>

        <Typography color="text.secondary" mb={2}>
          {product.quantityInStock < 100 ? "Only" : null}{" "}
          {product.quantityInStock} in stock
        </Typography>

        <Box>
          <Currency value={product.price} />
        </Box>

        <Button
          size="large"
          sx={{
            float: "right",
            color: "white",
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
}
