import { useSelector } from 'react-redux';

const RegionsContainer = () => {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>{region.name}</li>
      ))}
    </ul>
  );
};

export default RegionsContainer;
