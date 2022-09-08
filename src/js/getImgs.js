import axios from 'axios';

export const getImgs = async (query, page = 1) => {
  const queryParams = {
    key: '29755984-d1bcd819685560c7147c3f937',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 40,
  };

  const images = await axios.get(
    `https://pixabay.com/api/?${new URLSearchParams(queryParams)}`
  );

  return images;
};
