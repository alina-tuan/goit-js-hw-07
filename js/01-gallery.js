import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);


function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div >
`;
    })
      .join('');
};

galleryContainer.addEventListener('click', onGalleryImgClick);
function onGalleryImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return
    };
    const modalwindow = basicLightbox.create(`
    <img src = "${event.target.dataset.source}"> width = "800" height = "600"
    `);
    modalwindow.show();
  console.log(event.target);
};


// console.log(galleryItems);
