import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';

export default function CartPage() {

  const cart = useSelector(state => state.cart.products)
  console.log(cart)
  return (
    <Box>
      <Card>
        <h2> Order Summary </h2>

        {cart.map((item, idx) => (
          <Box key={idx}>
            <p> {item.name} </p>
            <p> {item.description}</p>
            <p> {item.price} </p>
          </Box>
        )
        )}
      </Card>
    </Box>
  )
}