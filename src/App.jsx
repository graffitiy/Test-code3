import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CategoriesContainer from './categoriesContainer';
import { loadCategories } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <h2>App</h2>
      <CategoriesContainer />
    </>
  );
}
