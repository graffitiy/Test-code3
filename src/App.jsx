import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CategoriesContainer from './categoriesContainer';
import setCategories from './actions';
import fetchCategories from './api';

export default function App() {
  const dispatch = useDispatch();
  const loadCategories = async () => {
    const response = await fetchCategories();
    dispatch(setCategories(response));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <h2>App</h2>
      <CategoriesContainer />
    </>
  );
}
