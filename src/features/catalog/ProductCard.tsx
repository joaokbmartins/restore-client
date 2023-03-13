import { Box, Typography } from "@mui/material";
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
      <Box
        component={Link}
        to={`/catalog/${product.id}`}
        sx={{
          ...linkStyle,
          backgroundColor: "#F8F8F8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "230px", height: "230px" }}>
          <img
            src={`assets/images/${product.imagePath}`}
            alt={product.name}
            width="100%"
          />
        </Box>
      </Box>

      <Box
        sx={{
          border: "1px solid #f5f5f5;",
          p: 1,
        }}
      >
        <Typography
          component={Link}
          to={`/catalog/${product.id}`}
          sx={{ ...linkStyle, "&:hover": { color: "#C7511F" } }}
        >
          {product.name}
        </Typography>

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
      </Box>
    </>
  );
}
