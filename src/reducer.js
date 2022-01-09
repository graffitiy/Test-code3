const initialState = {
  categories: [],
  regions: [],
};

const defaultReducer = (state) => state;

const reducers = {
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),

  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
