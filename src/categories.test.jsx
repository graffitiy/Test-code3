import { render, fireEvent } from '@testing-library/react';
import Categories from './categories';
import { CATEGORIES } from './constants';

const updateSelectedCategory = jest.fn();

describe('Categories', () => {
  const renderComponent = (categories, selectedCategoryId) => render(
    <Categories
      categories={categories}
      updateSelectedCategory={updateSelectedCategory}
      selectedCategoryId={selectedCategoryId}
    />,
  );

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링된다', () => {
    const { container } = renderComponent(CATEGORIES, '');

    expect(container).toHaveTextContent('한식');
  });

  context('카테고리가 있을 때', () => {
    it('카테고리를 클릭하면 updateSelectedCategory가 호출된다', () => {
      const { getByRole } = renderComponent(CATEGORIES, '');
      const button = getByRole('button', { name: '한식' });
      fireEvent.click(button);
      expect(updateSelectedCategory).toBeCalled();
    });

    it('선택한 카테고리 뒤에는 (V)글자가 추가된다', () => {
      const { container } = renderComponent(CATEGORIES, 1);
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
