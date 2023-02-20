import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

import { IProduct } from "../../app/interfaces/products.interface";

interface IProps {
  products: IProduct[],
  addProduct: () => void,
}

export default function Catalog({ products, addProduct }: IProps) {

  return (
    <>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>

      <List>
        {
          products.map(
            (product) => (
              <ListItem key={product.id}>
                <ListItemAvatar>
                  <Avatar src={`/assets/images/${product.pictureUrl}`} alt={product.name} />
                </ListItemAvatar>

                <ListItemText>
                  {product.id} |
                  {product.price} |
                  {product.quantityInStock} |
                  {product.brand} |
                  {product.description} |
                  {product.type}
                </ListItemText>
              </ListItem>
            )
          )
        }
      </List>
    </>
  )
}