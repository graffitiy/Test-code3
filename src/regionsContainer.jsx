import { useSelector } from 'react-redux';
import Regions from './regions';

const RegionsContainer = () => {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <Regions regions={regions} />
  );
};

export default RegionsContainer;
