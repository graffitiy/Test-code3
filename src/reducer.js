const initialState = {
  categories: [],
  regions: [],
  restaurants: [],
  categoryId: 0,
  region: '',
};

const defaultReducer = (state) => state;

const reducers = {
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),

  setCategory: (state, { payload: { categoryId } }) => ({
    ...state,
    categoryId,
  }),

  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),

  setRegion: (state, { payload: { region } }) => ({
    ...state,
    region,
  }),

  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
