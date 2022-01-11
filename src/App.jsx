import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CategoriesContainer from './categoriesContainer';
import { loadCategories, loadRegions } from './actions';
import RegionsContainer from './regionsContainer';
import restaurantsContainer from './restaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <CategoriesContainer />
      <RegionsContainer />
      <restaurantsContainer />
    </>
  );
}
