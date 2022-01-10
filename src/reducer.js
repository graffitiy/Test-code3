const initialState = {
  categories: [],
  regions: [],
  restaurants: [],
  category: '',
  region: '',
};

const defaultReducer = (state) => state;

const reducers = {
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),

  setCategory: (state, { payload: { category } }) => ({
    ...state,
    category,
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
