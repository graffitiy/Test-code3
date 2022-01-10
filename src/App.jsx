import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CategoriesContainer from './categoriesContainer';
import { loadCategories, loadRegions } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <h2>App</h2>
      <CategoriesContainer />
    </>
  );
}
