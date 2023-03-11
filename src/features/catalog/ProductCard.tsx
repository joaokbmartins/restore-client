import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../app/interfaces/products.interface";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const toCurrency = (value: number) => {
    const valueStr = String(value);
    const { length } = valueStr;
    const decimals = valueStr.slice(-2);
    const integerArr = valueStr.split("").splice(0, length - 2);
    const integerArrFrmt = integerArr
      .reverse()
      .reduce((previous: string[], actual: string, index) => {
        previous.push(actual);
        if ((index + 1) % 3 === 0 && index + 1 !== integerArr.length)
          previous.push(".");
        return previous;
      }, []);
    const currencyFrmt = `${integerArrFrmt.reverse().join("")},${decimals}`;
    return currencyFrmt;
  };

  const titleStile = {
    sx: {
      fontWeight: "bold",
      color: "primary.light",
      fontSize: 16,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: {
        xs: "150px",
        sm: "150px",
        md: "110px",
        lg: "180px",
        xl: "180px",
      },
    },
  };
  return (
    <>
      <Card raised={true}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: "primary.light", color: "white" }}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={titleStile}
        ></CardHeader>

        <CardMedia
          title={product.name}
          image={`assets/images/${product.imagePath}`}
          sx={{ height: 140, backgroundSize: "contain" }}
        />

        <CardContent>
          <Typography gutterBottom color="secondary" variant="h5">
            R$ {toCurrency(product.price)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Add to Cart</Button>
          <Button
            size="small"
            component={NavLink}
            to={`/catalog/${product.id}`}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
