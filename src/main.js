/*Імпорт iziToast*/
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
/* END*/

/* Імпорт функцій */
import { lightbox } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
import { showLoader } from './js/render-functions.js';
import { hideLoader } from './js/render-functions.js';
/* END */

/* Змінні */
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
/* END */

/* Подія Submit */
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const searchText = formData.get('search-text').trim();
  if (!searchText) {
    return;
  }
  clearGallery(gallery);
  showLoader();
  getImagesByQuery(searchText)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits, gallery);
      lightbox.refresh();
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});
/* END */
