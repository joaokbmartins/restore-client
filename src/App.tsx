import { useEffect, useState } from "react";

export interface IProduct {
  id: number,
  type: string,
  name: string,
  price: number,
  brand: string,
  pictureUrl: string,
  description: string,
  quantityInStock: number,
}

function App() {
  const [products, setProducts] = useState([] as IProduct[]);

  function fetchData() {
    return fetch("http://localhost:5000/api/v1/Products")
      .then(response => response.json())
      .then((json: IProduct[]) => json);
  }

  useEffect(() => {
    fetchData()
      .then((data: IProduct[]) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts(
      (previousState: IProduct[]) =>
        [
          ...previousState,
          {
            "id": previousState.slice(-1)[0].id + 1,
            "price": 0,
            "quantityInStock": 0,
            "brand": 'string',
            "description": 'string',
            "name": 'string',
            "pictureUrl": 'string',
            "type": 'string',
          }
        ]
    );
  }

  return (
    <div style={{ color: 'blue' }}>
      <h1>Re-Store</h1>

      <button onClick={addProduct}>Add Product</button>

      <ul>
        {
          products.map(
            (product, index) => (
              <li key={index}>{product.id} - {product.price} - {product.quantityInStock} - {product.brand} - {product.description} - {product.name} - {product.pictureUrl} - {product.type}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;