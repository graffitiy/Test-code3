import { useSelector, useDispatch } from 'react-redux';
import Regions from './regions';
import { setRegion } from './actions';

const RegionsContainer = () => {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.region,
  }));

  const updateSelectedRegion = (region) => {
    dispatch(setRegion(region));
  };

  return (
    <Regions
      selectedRegion={selectedRegion}
      regions={regions}
      updateSelectedRegion={updateSelectedRegion}
    />
  );
};

export default RegionsContainer;
