import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import CategoriesContainer from './categoriesContainer';
import { CATEGORIES } from './constants';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: CATEGORIES,
  }));
  it('render', () => {
    const { container } = render(<CategoriesContainer categories={CATEGORIES} />);
    expect(container).toHaveTextContent('한식');
  });
});
