
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
import { fetchProducts } from '../../store/products';



export default function Products() {
  const dispatch = useDispatch();

  let filteredProducts = useSelector(state => state.product.filteredProducts)
  const categories = useSelector(state => state.category.categories);
  const categoryNames = categories.map(category => category.name)

  const handleCart = (product) => {
    dispatch(addToCart(product));
  }

  const filterProducts = (products, categories) => {
    let categoryFiltered = products.filter(product =>
      categories.includes(product.category)
    )


    //NOTE: If we run this code, it will filter out all products as none of the categorized products have a stock greater than 0
    let finalProducts = categoryFiltered.filter(product =>
      product.inStock > 0
    )
    return finalProducts;

    // return categoryFiltered;

  }

  filteredProducts = filterProducts(filteredProducts, categoryNames)


  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

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
          return (
            <Card key={idx} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
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
                height="140"
                sx={{ objectFit: 'contain' }}
                image={product.image}
                alt={product.name}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginTop: 'auto' }}>
                <Button size="small" onClick={() => handleCart(product)}>Add to Cart</Button>
              </CardActions>
            </Card>
          )
        })}
      </Box>
    </>
  );
}
