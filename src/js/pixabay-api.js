export function onSearch(searchValue) {

    const searchParam = new URLSearchParams({
    key: '43777991-fc34414997ff3024de4420c7b',
    image_type: 'photo',
    q: searchValue,
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 9,
  });

  const BASE_URL = 'https://pixabay.com/api/';

  return fetch(`${BASE_URL}?${searchParam}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}