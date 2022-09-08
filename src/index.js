import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImgs } from './js/getImgs';
import { renderGallery } from './js/renderGallery';

const searchForm = document.getElementById('search-form');
const btnLoadMore = document.querySelector('.load-more');
const galleryWrapper = document.querySelector('.gallery');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const { data } = await getImgs(event.target.elements.searchQuery.value);
  galleryWrapper.innerHTML = '';

  if (!data.total) {
    btnLoadMore.classList.add('hidden');
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );

    return;
  }

  galleryWrapper.innerHTML = renderGallery(data.hits);

  btnLoadMore.classList.remove('hidden');
});
