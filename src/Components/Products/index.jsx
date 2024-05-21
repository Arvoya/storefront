
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



export default function Products() {

  const filteredProducts = useSelector(state => state.product.filteredProducts)

  useEffect(() => {

  }, [filteredProducts])

  return (
    <>
      <h2>Our Products</h2>
      <ul>
        {filteredProducts.map((product, idx) => {
          return <li key={idx}> {product.name} </li>
        })}
      </ul>
    </>
  );
}