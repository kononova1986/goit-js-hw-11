import { onSearch } from './js/pixabay-api';

const inputElement = document.querySelector('.input');
inputElement.addEventListener('input', (event) => {
    event.target.style.border = '1px solid #4E75FF';
});

inputElement.addEventListener('blur', (event) => {
    event.target.style.border = '1px solid #808080';
});

const form = document.querySelector('.form');
const list = document.querySelector('.list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputElement.value.trim() === '') {
        return;
    }
    onSearch();
    list.innerHTML = '';
    inputElement.value = "";
});

