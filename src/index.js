import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImgs } from './js/getImgs';
import { renderGallery } from './js/renderGallery';

const searchForm = document.getElementById('search-form');
const btnLoadMore = document.querySelector('.load-more');
const galleryWrapper = document.querySelector('.gallery');
let page = 1;
let searchQuery = '';


const showLastPageMessage = ({ total, totalHits }) => {
  if (total === totalHits) {
    btnLoadMore.classList.add('hidden');
    Notify.warning("We're sorry, but you've reached the end of search results.");
  }
}


btnLoadMore.addEventListener('click', async () => {
  const { data } = await getImgs(searchQuery, ++page);
  galleryWrapper.insertAdjacentHTML('beforeend', renderGallery(data.hits));
  showLastPageMessage(data);
});

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  searchQuery = event.target.elements.searchQuery.value;
  page = 1;

  const { data } = await getImgs(searchQuery, page);
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

  showLastPageMessage(data);
});

