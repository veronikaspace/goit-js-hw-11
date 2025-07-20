import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, renderImages } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const query = form.elements['search-text'].value.trim();
    if (!query) return;

    clearGallery(gallery);

    loader.classList.remove('is-hidden');

    getImagesByQuery(query)
        .then(function (data) {
            if (data.hits.length === 0) {
                iziToast.warning({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }
            loader.classList.add('is-hidden');
            renderImages(data.hits, gallery);
        })
        .catch(function () {
            loader.classList.add('is-hidden');
            iziToast.error({
                message: 'Error!',
                position: 'topRight',
            });
        });
});