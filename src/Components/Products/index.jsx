
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';



export default function Products() {
  const dispatch = useDispatch();

  const filteredProducts = useSelector(state => state.product.filteredProducts)

  const handleCart = (product) => {
    console.log('here is the product', product)
    dispatch(addToCart(product));
  }



  useEffect(() => {

  }, [filteredProducts])

  return (
    <>
      <h2>Our Products</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 420,
            height: 420,
          },
        }}
      >
        {filteredProducts.map((product, idx) => {
          return <Card key={idx} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[500] }} aria-label="weed">
                  W
                </Avatar>
              }
              title={product.name}
              subheader={product.category}
            />
            <CardMedia
              component="img"
              height="194"
              sx={{ objectFit: 'contain' }}
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions >
              <Button size="small" onClick={() => handleCart(product)}>Add to Cart</Button>
            </CardActions>
          </Card>

        })}
      </Box>
    </>
  );
}
