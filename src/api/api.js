import { GET_CATEGORIES } from './urls';

const fetchCategories = async () => {
  const response = await fetch(GET_CATEGORIES);
  return response.json();
};

export default fetchCategories;
