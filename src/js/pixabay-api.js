import { render } from "./render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputElement = document.querySelector('.input');
const FORM_KEY = 'search-word';

let inputData = JSON.parse(localStorage.getItem(FORM_KEY)) || {};
inputElement.value = inputData.search || '';

export function onSearch() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'inline-block';
    const searchParam = new URLSearchParams({
    key: '43777991-fc34414997ff3024de4420c7b',
    q: inputElement.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 9,
  });

  const BASE_URL = 'https://pixabay.com/api/';

  fetch(`${BASE_URL}?${searchParam}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(photo => {
      if (photo.totalHits === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          icon: '',
          backgroundColor: '#EF4040',
          position: 'topRight',
          progressBarColor: '#B51B1B',
          messageColor: 'white',
          close: false 
        });
      } else {
        render(photo);
      }
      loader.style.display = 'none';
    })
    .catch(error => console.log(error));
}