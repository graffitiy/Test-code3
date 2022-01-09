import fetchCategories from './api/api';

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
