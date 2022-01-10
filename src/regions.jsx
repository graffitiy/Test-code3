import { useState } from 'react';

const Regions = ({ regions }) => {
  const [selected, setSelected] = useState();

  const handleClickButton = ({ target: { name } }) => {
    setSelected(name);
  };

  if (!regions || regions.length === 0) {
    return <h3>지역이 존재하지 않습니다</h3>;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" name={name} onClick={handleClickButton}>
            {`${name}${selected === name ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Regions;
