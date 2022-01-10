import { GET_CATEGORIES, GET_REGIONS, GET_RESTAURANTS } from './urls';

export const fetchCategories = async () => {
  const response = await fetch(GET_CATEGORIES);
  return response.json();
};

export const fetchRegions = async () => {
  const regions = await fetch(GET_REGIONS);
  return regions.json();
};

export const fetchRestaurants = async () => {
  const restaurants = await fetch(GET_RESTAURANTS);
  return restaurants.json();
};
