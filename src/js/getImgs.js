import axios from 'axios';

export const getImgs = query => {
  const queryParams = {
    key: '29755984-d1bcd819685560c7147c3f937',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(
    `https://pixabay.com/api/?${new URLSearchParams(queryParams)}`
  );
};
