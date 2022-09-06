import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImgs } from './js/getImgs';
import { renderGallery } from './js/renderGallery';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  getImgs(event.target.elements.searchQuery.value).then(({ data }) => {
    if (!data.total) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    renderGallery(data.hits);
  });
});
