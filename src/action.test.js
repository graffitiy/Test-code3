import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchRegions, fetchCategories, fetchRestaurants } from './api/api';
import { CATEGORIES, REGIONS, RESTAURANTS } from './constants';
import { loadCategories, loadRegions, loadRestaurants } from './actions';

jest.mock('./api/api');

const mockStore = configureStore([thunk]);

fetchCategories.mockResolvedValue(CATEGORIES);
fetchRegions.mockResolvedValue(REGIONS);
fetchRestaurants.mockResolvedValue(RESTAURANTS);

describe('actions', () => {
  describe('loadCategories', () => {
    it('setCategories를 호출한다 ', async () => {
      const store = mockStore({});
      await store.dispatch(loadCategories());
      const actions = store.getActions();

      expect(actions[0].payload.categories).toEqual(CATEGORIES);
    });
  });

  describe('loadRegions', () => {
    it('setRegions를 호출한다', async () => {
      const store = mockStore({});
      await store.dispatch(loadRegions());
      const actions = store.getActions();

      expect(actions[0].payload.regions).toEqual(REGIONS);
    });
  });

  describe('loadRestaurants', () => {
    it('setRestaurants를 호출한다', async () => {
      const store = mockStore({});
      await store.dispatch(loadRestaurants());

      const actions = store.getActions();

      expect(actions[0].payload.restaurants).toEqual(RESTAURANTS);
    });
  });
});
