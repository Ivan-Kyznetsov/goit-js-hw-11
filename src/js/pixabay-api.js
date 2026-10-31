import axios from 'axios';

const API_KEY = '58300342-7e7ce977dcf59cdf4d1fb4838';
const BASE_URL = 'https://pixabay.com/api';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data);
}
