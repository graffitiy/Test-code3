import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from './actions';
import Restaurants from './restaurants';

const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const { region, category, restaurants } = useSelector((state) => ({
    region: state.region,
    category: state.category,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(region, category));
  }, [region, category]);

  return <Restaurants restaurants={restaurants} />;
};

export default RestaurantsContainer;
