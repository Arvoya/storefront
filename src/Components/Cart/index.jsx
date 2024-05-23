import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import logo from '../../assets/IDC-logo.png'
import { removeFromCart } from '../../store/cart';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function CartDrawer() {

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.products)
  let total = 0;
  cart.forEach(product => {
    total += product.quantity
  });

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  let DrawerList;
  useEffect(() => {

  }, [cart])

  DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {cart.map((product, idx) => (
          <ListItem key={idx} disablePadding>
            <Typography>{product.name} {product.quantity}</Typography>
            <Button onClick={(event) => {
              event.stopPropagation();
              dispatch(removeFromCart(product));
            }}>
              X
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography>Total: {total}</Typography>
    </Box>
  );

  return (
    <div style={{ margin: '45px' }}>
      <Badge
        badgeContent={total}
        onClick={toggleDrawer(true)}
        sx={{ fontSize: '1.75em', cursor: 'pointer', color: 'black', '.MuiBadge-badge': { backgroundColor: '#75c420', height: '1.5em', width: '1.5em', fontSize: '20px', borderRadius: '50%' } }}
      >
        <div style={{ height: '2em' }}>
          <img style={{ height: '100%' }} src={logo} alt="logo" />
        </div>
      </Badge>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>
    </div >
  );
}
