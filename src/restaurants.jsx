const Restaurants = ({ restaurants }) => {
  if (!restaurants || restaurants.length === 0) {
    return <h2>조건에 맞는 식당이 없습니다</h2>;
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Restaurants;
