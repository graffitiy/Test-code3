import { useState } from 'react';

export default function Categories({ categories }) {
  const [clicked, setCliicked] = useState();

  const handleClickButton = ({ target: { name } }) => {
    setCliicked(name);
  };

  if (categories.length === 0) {
    return <h1>카테고리가 존재하지 않습니다.</h1>;
  }
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
