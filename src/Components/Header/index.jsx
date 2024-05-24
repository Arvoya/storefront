import { Link } from 'react-router-dom';
import CartDrawer from '../Cart';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', width: '100v' }}>
      <Link to="/">
        <h1 style={{ color: 'black' }}>In Da Couch?</h1>
      </Link>
      <CartDrawer />
    </header>
  )
}
