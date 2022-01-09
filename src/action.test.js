import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchCategories from './api/api';
import { CATEGORIES } from './constants';
import { loadCategories } from './actions';

jest.mock('./api/api');

const mockStore = configureStore([thunk]);
fetchCategories.mockResolvedValue(CATEGORIES);

describe('actions', () => {
  describe('loadCategories', () => {
    it('setCategories를 호출한다 ', async () => {
      const store = mockStore({});
      await store.dispatch(loadCategories());
      const actions = store.getActions();

      expect(actions[0].payload.categories).toEqual(CATEGORIES);
    });
  });
});
