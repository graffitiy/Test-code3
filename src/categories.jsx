import { useState } from 'react';

export default function Categories({ categories }) {
  const [clicked, setCliicked] = useState();

  const handleClickButton = ({ target: { name } }) => {
    setCliicked(name);
  };
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" name={name} onClick={handleClickButton}>
            {`${name}${clicked === name ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
