import { fireEvent, render } from '@testing-library/react';
import { REGIONS } from './constants';
import Regions from './regions';

const updateSelectedRegion = jest.fn();

describe('regions', () => {
  const renderComponent = (regions, selectedRegion) => render(
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      updateSelectedRegion={updateSelectedRegion}
    />,
  );

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링 된다', () => {
    const { container } = renderComponent(REGIONS);

    expect(container).toHaveTextContent('서울');
  });

  context('지역이 있을 때', () => {
    it('지역을 클릭하면 updateSelectedRegion이 호출된다', () => {
      const { getByRole } = renderComponent(REGIONS);
      const button = getByRole('button', { name: '서울' });
      fireEvent.click(button);
      expect(updateSelectedRegion).toBeCalled();
    });

    it('선택한 지역에는 V가 표시된다', () => {
      const { container } = renderComponent(REGIONS, '서울');

      expect(container).toHaveTextContent('서울(V)');
    });
  });

  context('지역이 없을 때', () => {
    it('지역이 존해하지 않다고 출력된다', () => {
      const { container } = renderComponent([]);

      expect(container).toHaveTextContent('지역이 존재하지 않습니다');
    });
  });
});
