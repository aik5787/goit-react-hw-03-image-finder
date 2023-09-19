import axios from 'axios';

const apiKey = '38632886-c853eefcb5943d1a53be12591';
const apiUrl = 'https://pixabay.com/api/';
const perPage = 12;

export async function searchImages(query, currentPage) {
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: currentPage,
  });
  try {
    const response = await axios.get(apiUrl, { params });
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images');
  }
}
