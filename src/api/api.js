import { GET_CATEGORIES, GET_REGIONS } from './urls';

export const fetchCategories = async () => {
  const response = await fetch(GET_CATEGORIES);
  return response.json();
};

export async function fetchRegions() {
  const regions = await fetch(GET_REGIONS);
  return regions.json();
}
