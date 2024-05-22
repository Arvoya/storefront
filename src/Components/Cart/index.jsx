import * as React from 'react';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import WeekendIcon from '@mui/icons-material/Weekend';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import logo from '../../assets/IDC-logo.png'

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
