const imageToHtml = ({ webformatURL, tags, likes, views, comments, downloads, largeImageURL }) => {
  return `
    <div class="photo-card">
      <a class="gallery-item" href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
      <div class="info">
        <p class="info-item">
          <b>likes</b>
          ${likes}
        </p>
        <p class="info-item">
          <b>views</b>
          ${views}
        </p>
        <p class="info-item">
          <b>comments</b>
          ${comments}
        </p>
        <p class="info-item">
          <b>downloads</b>
          ${downloads}
        </p>
      </div>
    </div>
  `;
};

export const renderGallery = images => {
  return images.map(imageToHtml).join('');
};
