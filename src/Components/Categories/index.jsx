
import { useSelector, useDispatch } from 'react-redux';
import { updateCategory } from '../../store/categories';
import { productFilter } from '../../store/products.js';
import { useEffect } from 'react';

export default function Categories() {

  const categories = useSelector(state => state.category.categories);
  const activeCategory = useSelector(state => state.category.activeCategory)
  const dispatch = useDispatch();

  const handleClick = (category) => {
    dispatch(updateCategory(category.name))
  }

  useEffect(() => {
    dispatch(productFilter(activeCategory))
  }, [activeCategory, dispatch])

  return (
    <section>
      <h2>Browse our Categories</h2>
      <ul>
        {categories.map((category, idx) => {
          return <li key={idx} onClick={() => handleClick(category)}>
            <p> {category.name} </p>
            <p> {category.description} </p>
          </li>
        })}
      </ul>
      <h3> Active Category: {activeCategory}</h3>
    </section>
  );
}