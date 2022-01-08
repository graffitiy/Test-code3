const fetchCategories = async () => {
  const URL = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(URL);
  return response.json();
};

export default fetchCategories;
