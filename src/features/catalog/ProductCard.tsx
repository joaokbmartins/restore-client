import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { IProduct } from "../../app/interfaces/products.interface";
import Currency from "../../app/utils/Currency";

interface IProps {
  product: IProduct;
}

export const titleStyle = {
  fontWeight: "bold",
  color: "primary.light",
  fontSize: 16,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const titleStyleWidth = {
  maxWidth: {
    xs: "150px",
    sm: "150px",
    md: "110px",
    lg: "180px",
    xl: "180px",
  },
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

export default function ProductCard({ product }: IProps) {
  return (
    <>
      <Card raised={true}>
        <CardHeader
          component={Link}
          to={`/catalog/${product.id}`}
          sx={linkStyle}
          avatar={
            <Avatar sx={{ backgroundColor: "primary.light", color: "white" }}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: {
              ...titleStyle,
              ...titleStyleWidth,
            },
          }}
        ></CardHeader>

        <CardMedia
          title={product.name}
          image={`assets/images/${product.imagePath}`}
          sx={{ ...linkStyle, height: 140, backgroundSize: "contain" }}
          component={Link}
          to={`/catalog/${product.id}`}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {product.brand} / {product.type}
          </Typography>

          <Box
            component={Link}
            to={`/catalog/${product.id}`}
            sx={{ ...linkStyle }}
          >
            <Currency value={product.price} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
