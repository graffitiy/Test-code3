import { fetchRegions, fetchCategories } from './api/api';

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};
