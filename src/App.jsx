
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import store from './store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </Provider>
  )
}

export default App
