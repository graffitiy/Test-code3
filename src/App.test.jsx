import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import { CATEGORIES, REGIONS } from './constants';

jest.mock('react-redux');
jest.mock('./api/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: CATEGORIES,
    regions: REGIONS,
    categoryId: 0,
    region: 0,
    restaurants: [],
  }));

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링된다', () => {
    render(<App />);
  });
});
