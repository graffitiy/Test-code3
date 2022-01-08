import { render, fireEvent } from '@testing-library/react';
import Categories from './categories';
import { CATEGORIES } from './constants';

describe('Categories', () => {
  const renderComponent = () => render(<Categories categories={CATEGORIES} />);
  it('render', () => {
    const { container } = renderComponent();
    expect(container).toHaveTextContent('한식');
  });

  it('카테고리를 클릭하면 V가 표시된다.', () => {
    const { container, getByRole } = renderComponent();
    const button = getByRole('button', { name: '한식' });
    fireEvent.click(button);
    expect(container).toHaveTextContent('한식(V)');
  });
});
