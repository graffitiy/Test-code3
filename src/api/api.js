import { GET_CATEGORIES, GET_REGIONS, GET_RESTAURANTS } from './urls';

export const fetchModule = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCategories = async () => {
  const response = await fetchModule(GET_CATEGORIES);
  return response.json();
};

export const fetchRegions = async () => {
  const regions = await fetchModule(GET_REGIONS);
  return regions.json();
};

export const fetchRestaurants = async (region = '', categoryId = 0) => {
  const restaurants = await fetchModule(GET_RESTAURANTS(region, categoryId));
  return restaurants.json();
};
