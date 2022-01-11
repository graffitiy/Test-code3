import { fetchRegions, fetchCategories, fetchRestaurants } from './api/api';

export const setCategory = (categoryId) => ({
  type: 'setCategory',
  payload: {
    categoryId,
  },
});

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const setRegion = (region) => ({
  type: 'setRegion',
  payload: {
    region,
  },
});

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

export const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

export const loadRestaurants = (region, categoryId) => async (dispatch) => {
  const restaurants = await fetchRestaurants(region, categoryId);
  dispatch(setRestaurants(restaurants));
};

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};
