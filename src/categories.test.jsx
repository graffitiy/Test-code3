import { render, fireEvent } from '@testing-library/react';
import Categories from './categories';
import { CATEGORIES } from './constants';

describe('Categories', () => {
  const renderComponent = (categories) => render(<Categories categories={categories} />);

  it('render', () => {
    const { container } = renderComponent(CATEGORIES);

    expect(container).toHaveTextContent('한식');
  });

  context('카테고리가 있을 때', () => {
    it('카테고리를 클릭하면 V가 표시된다.', () => {
      const { container, getByRole } = renderComponent(CATEGORIES);
      const button = getByRole('button', { name: '한식' });
      fireEvent.click(button);
      expect(container).toHaveTextContent('한식(V)');
    });
  });

  context('카테고리가 없을 때', () => {
    it('카테고리가 없다는 메세지를 확인할 수 있다', () => {
      const { container } = renderComponent([]);

      expect(container).toHaveTextContent('카테고리가 존재하지 않습니다.');
    });
  });
});
