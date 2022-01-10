export default function Categories({ categories, updateSelectedCategory, selectedCategory }) {
  const handleClickButton = ({ target: { name } }) => {
    updateSelectedCategory(name);
  };

  if (categories.length === 0) {
    return <h1>카테고리가 존재하지 않습니다.</h1>;
  }
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" name={name} onClick={handleClickButton}>
            {`${name}${selectedCategory === name ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
