import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { RESTAURANTS } from './constants';
import RestaurantsContainer from './r   estaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    category: '양식',
    region: '수원',
    restaurants: RESTAURANTS,
  }));

  it('식당을 보여준다', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent('도스키친');
  });
});
