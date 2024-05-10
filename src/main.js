import { onSearch } from './js/pixabay-api';
import { render } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputElement = document.querySelector('.input');
inputElement.addEventListener('input', (event) => {
    event.target.style.border = '1px solid #4E75FF';
});

inputElement.addEventListener('blur', (event) => {
    event.target.style.border = '1px solid #808080';
});
inputElement.addEventListener('input', (event) => {
inputElement.value = event.target.value;
})
const form = document.querySelector('.form');
const list = document.querySelector('.list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputElement.value.trim() === '') {
        iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                icon: '',
                backgroundColor: '#EF4040',
                position: 'topRight',
                progressBarColor: '#B51B1B',
                messageColor: 'white',
                close: false,
                timeout: 2000,
            });
        return list.innerHTML = '';
    }
    const loader = document.querySelector('.loader');
    loader.style.display = 'inline-block';
    
    onSearch(inputElement.value).then(photo => {
        if (photo.totalHits === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                icon: '',
                backgroundColor: '#EF4040',
                position: 'topRight',
                progressBarColor: '#B51B1B',
                messageColor: 'white',
                close: false,
                timeout: 2000,
            });
        } else {
            render(photo);
        }

    loader.style.display = 'none';
    }).catch(error => console.log(error));

    list.innerHTML = '';
    inputElement.value = '';
});
