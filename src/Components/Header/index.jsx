import CartDrawer from '../Cart';

export default function Header() {

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', width: '100vw' }}>
      <h1>In Da Couch?</h1>
      <CartDrawer />
    </header>
  )
}
