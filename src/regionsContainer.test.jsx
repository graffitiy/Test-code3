import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { REGIONS } from './constants';
import RegionsContainer from './regionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: REGIONS,
    region: '수원',
  }));

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링 된다', () => {
    const { container } = render(<RegionsContainer />);
    expect(container).toHaveTextContent('서울');
  });
});
