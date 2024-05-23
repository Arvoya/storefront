
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import CartPage from './Components/CartPage'
import ProductPage from './Components/ProductPage';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Categories /><Products /></>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/products/:productID' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}

export default App
