import { render } from '@testing-library/react';
import Categories from './categories';
import { CATEGORIES } from './constants';

describe('Categories', () => {
  it('render', () => {
    const { container } = render(<Categories categories={CATEGORIES} />);
    expect(container).toHaveTextContent('한식');
  });
});
