import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23963114-6d0d5d874ae460d9125bacd21';

export  function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
    return axios.get(BASE_URL, { params }).then(function (response) {
        return response.data;
    });
}
