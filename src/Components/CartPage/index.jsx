import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';

export default function CartPage() {

  const cart = useSelector(state => state.cart.products)
  let total = 0;
  cart.forEach(product => {
    total = total + (product.price * product.quantity)
  })
  console.log(cart)
  return (
    <Box>
      <Card>
        <h2> Order Summary </h2>

        {cart.map((item, idx) => (
          <Box key={idx}>
            <p>Name: {item.name} </p>
            <p>Description: {item.description}</p>
            <p>Price: {item.price} </p>
          </Box>

        )
        )}
        <h3> Total: ${total} </h3>
      </Card>
    </Box>
  )
}
