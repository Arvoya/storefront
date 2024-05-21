import * as React from 'react';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import WeekendIcon from '@mui/icons-material/Weekend';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';

export default function CartDrawer() {

  const [open, setOpen] = React.useState(false);

  const cart = useSelector(state => state.cart.products)
  console.log('here is cart', cart)
  const cartCount = useSelector(state => state.cart.cartCount)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {cart.map((product, idx) => (
          <ListItem key={idx} disablePadding>

            <Typography>{product.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ margin: '45px' }}>
      <Badge
        badgeContent={cartCount}
        color="secondary"
        onClick={toggleDrawer(true)}
        sx={{ fontSize: '2em', cursor: 'pointer' }}
      >
        <WeekendIcon sx={{ fontSize: '2em' }} />
      </Badge>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>
    </div >
  );
}
