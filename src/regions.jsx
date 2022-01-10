const Regions = ({ regions, selectedRegion, updateSelectedRegion }) => {
  const handleClickButton = ({ target: { name } }) => {
    updateSelectedRegion(name);
  };

  if (!regions || regions.length === 0) {
    return <h3>지역이 존재하지 않습니다</h3>;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" name={name} onClick={handleClickButton}>
            {`${name}${selectedRegion === name ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Regions;
