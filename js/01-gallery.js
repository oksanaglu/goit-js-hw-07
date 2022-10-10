import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

for (let el of galleryItems) 
document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<div class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__image" src ="${el.preview}" data-source = "${el.original}" alt ="${el.description}"></a></div>`);


const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
   event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  
  const instance = basicLightbox.create
    (`<img src="${event.target.dataset.source}">`)
  instance.show()
  galleryContainer.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close()
    }
  })
}


