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
let modalWindow;

galleryContainer.addEventListener("click", onGalleryImgClick);
function onGalleryImgClick(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  console.log(event.target);
  
  modalWindow = basicLightbox.create(`
    <img src = "${event.target.dataset.source}"> width = "800" height = "600"
    `, {
        onShow: (modalWindow) => {
          window.addEventListener("keydown", onEscapeClose)
      },
        onClose: (modalWindow) => {
          window.removeEventListener("keydown", onEscapeClose)
      }
    }
  );
  modalWindow.show();
};

function onEscapeClose(event) {
     if (event.key === "Escape") {
      modalWindow.close();
    };
}